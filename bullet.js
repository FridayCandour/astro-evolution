let bp = 0,
  go = 0;
function makeBullet(
  img,
  ent,
  speed = 60,
  win,
  latency,
  angle,
  sideToShoot,
  bp
) {
  if (win) {
    bp = ent.top - 34;
  } else {
    if (!(sideToShoot == "uleft" || sideToShoot == "uright")) {
      bp = ent.top + 60;
    } else {
      bp = ent.top - 80;
    }
  }
  const bulletPainter = new spriteSheetPainter(img, 1, 1, 1);
  const bulletBehaviour = function (bullet) {
    bulletPainter.rotate = angle;
    eArray = game.detectCollision(bullet, [...eArray], latency, false);
    if (win) {
      bullet.top -= speed;
    }

    if (!win && sideToShoot === "down") {
      bulletPainter.rotate = angle;
      bullet.top += speed;
      go = Math.round(ent.left + ent.width * 0.55);
    } else {
      if (!win && sideToShoot === "up") {
        bulletPainter.rotate = angle;
        bullet.top -= speed;
        go = Math.round(ent.left + ent.width * 0.65);
      } else {
        if (!win && sideToShoot === "dleft") {
          bulletPainter.rotate = angle;
          bullet.top += speed;
          bullet.left -= speed * 0.5;
          go = Math.round(ent.left + ent.width * 0.35);
        } else {
          if (!win && sideToShoot === "dright") {
            bulletPainter.rotate = angle;
            bullet.top += speed;
            bullet.left += speed * 0.5;
            go = Math.round(ent.left + ent.width * 0.85);
          } else {
            if (!win && sideToShoot === "uleft") {
              bp = ent.top - 60;
              bulletPainter.rotate = angle;
              bullet.top -= speed;
              bullet.left -= speed * 0.5;
              go = Math.round(ent.left + ent.width * 0.01);
            } else {
              if (!win && sideToShoot === "uright") {
                bp = ent.top - 60;
                bulletPainter.rotate = angle;
                bullet.top -= speed;
                bullet.left += speed * 0.5;
                go = Math.round(ent.left + ent.width * 0.45);
              }
            }
          }
        }
      }
    }

    if (bullet.top < 0 || bullet.top > canvas.height) {
      bullet.delete = true;
    }
    if (bullet.isHit === true) {
      bulletPainter.animateAllFrames = true;
      u(bullet).config({ width: 28, height: 28 });
      bulletPainter.changeSheet(game.getImg("explosion3"), 8, 1, 1);
      if (bulletPainter.isLastImage) {
        bullet.delete = true;
      }
    }
  };

  if (win) {
    go = Math.round(ent.left + ent.width * 0.45);
  }

  const bullet = new entity("bullet", bulletPainter, bulletBehaviour);
  u(bullet).config({ top: bp, left: go, width: 12, height: 22, border: false });
  game.assemble(bullet);
  return bullet;
}
