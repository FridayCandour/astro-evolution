

function makeEnemies(number, lp, tp, rp, bp) {
    let eees = [],
        sr = false,
        imgString = `enemy${rad(6,1,6)}`;
    let hSpread = Math.round(space_canvas.width / number), vSpread = 5;
    for (let i = 0; i < number; i++) {
        let  enemyPainter = new spriteSheetPainter(game.getImg(imgString),1,1,1);
        let shooting = 0;
        let enemyBehaviour = function (enemy) {
        enemy.left += rad(1);
        if (enemy.top > rad(space_canvas.height)) {
            enemy.top -= rad(4);    
            enemy.left -= rad(2)
        } else {
            enemy.top += rad(4);
            enemy.left += rad(2);
        }
        // defining angle of rotaions
        if (enemy.top > tp) {
            enemyPainter.rotate = -180;
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
            enemyPainter.rotate = 180;
        }
        shooting++;
        if (shooting % 30 === 0) {
            makeBullet(game.getImg("bullet4"), enemy, 10, false, 50, enemyPainter.rotate, sr);
            // shoot.play();
        }
        if (shooting > 119) {
            shooting = 0;
        }
        
        if (enemy.isHit === true) {
            enemyPainter.animateAllFrames = true;
            enemyPainter.changeSheet(game.getImg("explosion"),8,6,1)
        if (enemyPainter.isLastImage) {
            enemy.delete = true;
            scores.start();
                }
            }
        }
        
    let enemy = new entity("enemy", enemyPainter, enemyBehaviour);
        u(enemy).config({ top: 10 * vSpread,left: (hSpread * i) , width: 90, height: 100});
            renderer.assemble(enemy);
        eees.push(enemy);
  }
    return eees;
}



u("#play").on("click", ()=>{
        u(opener).scaleIn()
        game.start(space_canvas,1);
        // waves.toggle();
    u(endGame).scaleIn();
});
u(pop).on("click", ()=>{
    u(opener).scaleOut()
    u(endGame).scaleIn()
    renderer.toggleRendering()
    // waves.toggle();
});

u("#pause").on("click", () => {
    renderer.toggleRendering()
    // waves.toggle()
});

