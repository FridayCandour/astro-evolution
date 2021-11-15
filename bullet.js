function makeBullet(img, ent, speed = 60, win, latency, angle, sr) {
  let bp,
  go = 0;
  if (win) {
    bp = ent.top - 34;
  }else{
    bp = ent.top + 60;
  }
    const bulletPainter = new spriteSheetPainter(img,1,1,1);
    const bulletBehaviour = function (bullet) {
          bulletPainter.rotate = angle;
          eArray  = physics.detectCollision(bullet,[...eArray], latency, false, "jet");
          if (win) {
            bullet.top -=  speed;
          }

      if (!win && !sr) {
            bulletPainter.rotate = angle;
            bullet.top +=  speed;
             bullet.left += 4;
             go = Math.round((ent.left + (ent.width * 0.85)));
          }else{
            if (!win && sr) {
              bulletPainter.rotate = angle;
              bullet.top +=  speed;
              bullet.left -= 4;
              go = Math.round((ent.left + (ent.width * 0.85)))
            }
          }       
        if (bullet.top < 0 || bullet.top > space_canvas.height) {
          bullet.delete = true;
        }
        if (bullet.isHit === true) {
          bulletPainter.animateAllFrames = true;
          u(bullet).config({width: 28, height: 28});
          bulletPainter.changeSheet(game.getImg("explosion3"),8,1,1)
      if (bulletPainter.isLastImage) {
        bullet.delete = true;
      }}
    }
  
        if (win) {
          go = Math.round((ent.left + (ent.width * 0.45)));
        }
        if (!win && !sr) {
           go = Math.round((ent.left + (ent.width * 0.85)));
        }else{
          if (!win && sr) {
            go = Math.round((ent.left + (ent.width * 0.20)));
            bp = ent.top + 60;
          }
        }
        const bullet = new entity("bullet", bulletPainter, bulletBehaviour);
        u(bullet).config({ top: bp, left: go, width: 12, height: 22, border: false});
        renderer.assemble(bullet);
        return bullet;
}
