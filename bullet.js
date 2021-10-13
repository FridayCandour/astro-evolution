// creating bullets
function makeBullet(img, number,ent, speed = 60, win, latency) {
  eArray.push(ent)
    for (let i = 0; i < number; i++) {
        let  bulletPainter = new spriteSheetPainter(img,1,1,1);
        let bulletBehaviour = function (bullet) {
          physics.detectCollision(bullet,[...eArray,jet], latency);
          if (win) {
            bullet.top -=  speed;
          }else{
            bullet.top +=  speed;
          }
        
        if (bullet.top < 0 || bullet.top > space_canvas.height) {
          bullet.delete = true;
        }
        }
        let bullet = new entity("bullet", bulletPainter, bulletBehaviour);
        u(bullet).config({ top: ent.top + 76, left: Math.round((ent.left + (ent.width * 0.45))), width: 12, height: 24, border: false});
        renderer.assemble(bullet);
    }
}