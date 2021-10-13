let eArray = [],
shooting = 0;
function makeEnemies(number,lR,rR) {
    let hSpread = Math.round(space_canvas.width / number), vSpread = 1;
    for (let i = 0; i < number; i++) {
        let  enemyPainter = new spriteSheetPainter(re.getImg("enemy1"),1,1,1);
        let enemyBehaviour = function (enemy) {
            shooting++;
            if (shooting % 50 === 0) {
                makeBullet(re.getImg("bullet1"), 1,enemy, 30, false, 100)
            }
        enemy.left += rad(lR);
        if (enemy.top > (space_canvas.height * 0.5)) {
            enemy.top -= rad(rR);    
        } else {
            enemy.top += rad(rR);
        }
        if (enemy.isHit === true) {
            enemyPainter.changeSheet(re.getImg("explosion"),8,6,1)
        if (enemyPainter.isLastImage) {
            enemy.delete = true;
            eArray.splice(enemy.id, 1);
        }}}

        let enemy = new entity(i, enemyPainter, enemyBehaviour);
        u(enemy).config({ top: 10 * vSpread,left: (hSpread * i) , width: (0.08 * wH), height: 70});
        renderer.assemble(enemy);
    }
}