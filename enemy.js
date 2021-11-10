let maxEnemies;
function makeEnemies(number, lp, tp, rp, bp) {
    let eees = [],
        sr = false;
    maxEnemies = number;
    let hSpread = Math.round(space_canvas.width / number), vSpread = 5;
    for (let i = 0; i < number; i++) {
        let  enemyPainter = new spriteSheetPainter(game.getImg("enemy6"),1,1,1);
        let shooting = 0;
        let enemyBehaviour = function (enemy) {
            enemyPainter.animateAllFrames = false;
        enemy.left += rad(1);
        if (enemy.top > rad(space_canvas.height)) {
            enemy.top -= rad(10);    
            enemy.left -= rad(4)
        } else {
            enemy.top += rad(4);
            enemy.left += rad(4);
        }
        // defining angle of rotaions
        if (enemy.top > tp) {
            enemyPainter.rotate = -90;
        }
        if (enemy.left < lp) {
            enemyPainter.rotate = -25;
            sr = false;
        }
        if (enemy.left + enemy.width > rp) {
            enemyPainter.rotate = 25;
            sr = true;
        }
        if (enemy.top + enemy.height  > bp) {
            enemyPainter.rotate = 90;
        }
        shooting++;
        if (shooting % 10 === 0) {
            makeBullet(game.getImg("bullet2"), 1,enemy, 10, false, 100, enemyPainter.rotate,sr);
            // shoot.play();
        }
        if (shooting > 99) {
            shooting = 0;
        }
        
        if (enemy.isHit === true) {
            enemyPainter.animateAllFrames = true;
            enemyPainter.changeSheet(game.getImg("explosion"),8,6,1)
        if (enemyPainter.isLastImage) {
            enemy.delete = true;
            scores.start();
        }}}
        if (maxEnemies > 1) {
            // maxEnemies--;
            // console.log(maxEnemies);
        let enemy = new entity("enemy", enemyPainter, enemyBehaviour);
        u(enemy).config({ top: 10 * vSpread,left: (hSpread * i) , width: 90, height: 100});
            renderer.assemble(enemy);
    //         if (maxEnemies = 0) {
    //             maxEnemies = 0;
    //         }
    eees.push(enemy);
      } else {

    const enemy = renderer.getFreeEntity("enemy");
    console.log(enemy);
        u(enemy).config({ top: 10 * vSpread,left: (hSpread * i) , width: 90, height: 100});
        renderer.assemble(enemy);
       eees.push(enemy);
  }
 }
    return eees;
}

