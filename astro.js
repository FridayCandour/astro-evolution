game.backgroundImage(game.getImg("space7"), 6, true);
const waves = new audio(game.getAud("hum"), 0.5, 1);
const shoot = new audio(game.getAud("spacer", 0.1));
const missleSound = new audio(game.getAud("lase"), 0.04);
let lifeCounter = 500;
let stageCounter = 200;
let win = false;
// let lifeCounter = 1;
let eArray = [],
  missleShooting = 10,
  Enemies = 1,
  bulletNum = 60,
  jetCopy = null,
  canvas = game.getCanvas();

const jetBehavior = function (jet) {
  if (win) {
    win = false;
    u(endGame).removeAll();
    u(endGame).scaleOut();

    let img = u(endGame).appendTo("img", {
      src: "images/landing.png",
    });
    u(img).style({
      width: "50%",
    });
    let endButtons = u(endGame).appendTo("button", { id: "button" }, 1);
    endButtons.append("Play Next mission");

    jetCopy = jet.clone();
    game.deleteAllEntities();
    u(endButtons).on("click", () => {
      setTimeout(() => {
        eArray.push(jetCopy);
        jetCopy.config(
          Math.round(canvas.height - jetCopy.height + 100),
          Math.round((canvas.width - jetCopy.width) * 0.5),
          100,
          100
        );
        game.assemble(jetCopy);
        console.log(game.getAllEntities()[0].name);
        game.play();
        u(endGame).scaleIn();
      }, 5000);
    });

    game.pause();
  }

  missleShooting++;
  if (missle === true && right === true && missleShooting % 2 === 0) {
    makemissles(26, 0, "right");
    missle = false;
    if (missleShooting > 80) {
      missleShooting = 0;
    }
  }
  if (missle === true && left === true && missleShooting % 10 === 0) {
    makemissles(26, 0, "left");
    missleSound.play();
    missle = false;
    if (missleShooting > 80) {
      missleShooting = 0;
    }
  }
  if (down === true) {
    jet.top += 20;
    down = false;
  }

  if (right === true) {
    jet.left += 20;
    right = false;
  }

  if (left === true) {
    jet.left -= 20;
    left = false;
  }

  if (up === true) {
    jet.top -= 20;
    up = false;
  }

  if (fire === true) {
    makeBullet(game.getImg("bullet3"), jet, 20, true, 10, 0);
    // shoot.play();
  }
  fire = false;

  if (jet.isHit === true) {
    jet.isHit = false;
    lifeCounter--;
    if (lifeCounter < 250) {
      bar.style.backgroundColor = "yellow";
    }
    if (lifeCounter < 150) {
      bar.style.backgroundColor = "red";
    }
    bar.style.width = `${Math.round((lifeCounter / 500) * 100)}%`;
    eArray.push(jet);

    if (lifeCounter === 0) {
      jet.delete = true;
      endGame.innerHTML = "";
      const endButtons = u(endGame).appendTo("button", { id: "button" }, 2);
      endButtons[0].append("Play Again");
      u(endButtons[0]).on("click", () => {
        u(endGame).scaleIn();
        game.toggleRendering();
      });
      u(endButtons[1]).on("click", () => {
        u(opener).scaleOut();
        u(endGame).scaleIn();
      });
      endButtons[1].append("Quit Game");
      u(endGame).scaleOut();
      game.toggleRendering();
    }
  }
  if (eArray.length < 2) {
    Enemies++;
    console.log(stageCounter);
    if (stageCounter < 0) {
      stageCounter += 100;
      win = true;
    }
    eArray = [...eArray, ...makeEnemies(Enemies, jet, bulletNum)];
  }
};
// the player
const jetPainter = new spriteSheetPainter(game.getImg("jet3"), 1, 1, 1);
const jet = new entity("jet", jetPainter, jetBehavior);
eArray.push(jet);
jet.config(
  Math.round(canvas.height - jet.height + 100),
  Math.round((canvas.width - jet.width) * 0.5),
  100,
  100
);
game.assemble(jet);
u(endGame).scaleIn();
