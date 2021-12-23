function makeEnemies(number, swimmer, bulletNum) {
  let eees = [],
    sr = false,
    imgString = `enemy${rad(6, 1, 6)}`;
  let hSpread = Math.round(canvas.width / number),
    vSpread = 5;
  for (let i = 0; i < number; i++) {
    let enemyPainter = new spriteSheetPainter(game.getImg(imgString), 1, 1, 1);
    let shooting = 0;
    let enemyBehaviour = function (enemy) {
      // updating global swimmer position
      lp = swimmer.left;
      tp = swimmer.top;
      rp = swimmer.left + swimmer.width;
      bp = swimmer.top + swimmer.height;
      u(enemy).config({ lp: lp, tp: tp, rp: rp, bp: bp });

      enemy.left += rad(1);
      if (enemy.top > rad(canvas.height)) {
        enemy.top -= rad(4);
        enemy.left -= rad(2);
      } else {
        enemy.top += rad(4);
        enemy.left += rad(2);
      }
      // defining angle of rotaions
      if (enemy.top > tp) {
        enemyPainter.rotate = -180;
        sr = "up";
      }
      if (enemy.left < lp) {
        enemyPainter.rotate = -25;
        sr = "dright";
      }
      if (enemy.left + enemy.width > rp) {
        enemyPainter.rotate = 25;
        sr = "dleft";
      }
      if (enemy.top + enemy.height > bp) {
        enemyPainter.rotate = 180;
        sr = "down";
      }
      if (enemy.top + enemy.height > bp && enemy.left + enemy.width > rp) {
        enemyPainter.rotate = -205;
        sr = "uleft";
      }
      if (enemy.top + enemy.height > bp && enemy.left < lp) {
        enemyPainter.rotate = 205;
        sr = "uright";
      }

      shooting++;
      if (shooting % bulletNum === 0) {
        makeBullet(
          game.getImg("bullet4"),
          enemy,
          10,
          false,
          50,
          enemyPainter.rotate,
          sr
        );
      }
      if (shooting > 119) {
        shooting = 0;
      }

      if (enemy.isHit === true) {
        enemyPainter.animateAllFrames = true;
        enemyPainter.changeSheet(game.getImg("explosion"), 8, 6, 1);
        if (enemyPainter.isLastImage) {
          enemy.delete = true;
          stageCounter--;
          scores.start();
        }
      }
    };

    let enemy = new entity("enemy", enemyPainter, enemyBehaviour);
    u(enemy).config({
      top: 10 * vSpread,
      left: hSpread * i,
      width: 90,
      height: 100,
    });
    game.assemble(enemy);
    eees.push(enemy);
  }
  return eees;
}

u("#play").on("click", () => {
  waves.toggle();
  if (!start) {
    return;
  }
  u(opener).scaleIn();
  u(endGame).scaleIn();
  game.toggleRendering();
});

u(pop).on("click", () => {
  waves.toggle();
  u(opener).scaleOut();
  u(endGame).scaleIn();
  game.toggleRendering();
});

u("#pause").on("click", () => {
  waves.toggle();
  game.toggleRendering();
});
