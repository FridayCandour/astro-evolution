const wH = space_canvas.width;
const vH = space_canvas.height;
renderer.backgroundImage(game.getImg("space7"),6,true);
const waves = new audio(game.getAud("hum"),0.5,1);
const shoot = new audio(game.getAud("spacer", 0.1));
const missleSound = new audio(game.getAud("power",0.1));
let lifeCounter = 500;
let eArray = [],
    missleShooting = 10;

const jetBehavior = function (jet){
    missleShooting++;
    if (missle === true && right === true && missleShooting % 10 === 0) {
        makemissles(26, 0, "right");
        missle = false;
        if (missleShooting > 119) {
            missleShooting = 0
        }
    }
        if (missle === true && left === true && missleShooting % 10 === 0) {
            makemissles(26, 0, "left");
            missleSound.play();
            missle = false;
            if (missleShooting > 119) {
            missleShooting = 0
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
        makeBullet(game.getImg("bullet4"), jet, 20, true, 10, 0);
        // shoot.play();
    }
    fire = false;


    if (jet.isHit === true) {
        lifeCounter--;
        if (lifeCounter < 250) {
            bar.style.backgroundColor = "yellow";
        }
        if (lifeCounter < 150) {
            bar.style.backgroundColor = "red";
        }
        bar.style.width = `${Math.round((lifeCounter / 500) * 100)}%`;
        if (lifeCounter === 0) {
        jetPainter.changeSheet(game.getImg("explosion1"),8,1,1);
        jetPainter.animateAllFrames = true;
    if (jetPainter.isLastImage) {
        jet.delete = true;
        u(endGame).scaleOut();
        u(endGame).style({ transform: "translate(-50%, -50%)" });
        renderer.toggleRendering()
    }   
}
jet.isHit = false;
}
    if (eArray.length < 2) {
    eArray = [...eArray, ...makeEnemies(6, jet.left, jet.top,jet.left + jet.width,jet.top + jet.height)];
}
};
// the player 
const jetPainter = new spriteSheetPainter(game.getImg("jet3"),1,1,1);
const jet = new entity("jet", jetPainter, jetBehavior);
eArray.push(jet);
u(jet).config({top: Math.round((space_canvas.height - jet.height)), left: Math.round((space_canvas.width - (jet.width * 0.5)) * 0.5) , width: (0.06 * wH), height: 150});
renderer.assemble(jet);
