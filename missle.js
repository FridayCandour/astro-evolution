function makemissles(speed = 60, latency = 0, dir) {
  let  go = Math.round((jet.left + (jet.width * 0.45))),
    bp = jet.top - 55;
  
        const misslePainter = new spriteSheetPainter(game.getImg("bullet3"),1,1,1);
        const missleBehaviour = function (missle) {
          eArray  = game.detectCollision(missle,[...eArray], latency, false, "jet");
          if (dir === "right") {
            misslePainter.rotate = 35;
            missle.top = missle.top - speed;
            missle.left = missle.left + speed;
          } else {
            misslePainter.rotate = -35;
            missle.top = missle.top - speed;
              missle.left = missle.left - speed;
          }
          if (missle.top < 0 || missle.top > 1000) {
          missle.delete = true;
        }
        if (missle.isHit === true) {
          misslePainter.animateAllFrames = true;
          u(missle).config({width: 28, height: 28});
          misslePainter.changeSheet(game.getImg("explosion3"),8,1,1)
      if (misslePainter.isLastImage) {
        missle.delete = true;
      }}
        }
          const missle = new entity("missle", misslePainter, missleBehaviour);
        u(missle).config({ top: bp, left: go, width: 14, height: 52, border: false});
        game.assemble(missle);
        return missle;
}
