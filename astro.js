const space = re.build("space");
space_canvas = buildCanvas("space_canvas"); 
space.append(space_canvas);
renderer.render(space_canvas,1);
const wH = space_canvas.width;
const vH = space_canvas.height;
renderer.backgroundImage(re.getImg("space8"),6,true);
const waves = new audio(re.getAud("hum"),1,1);
const shoot = new audio(re.getAud("fire",1,0.1));
let lifeCounter = 500;
let eArray = [];

const jetBehavior = function (jet){ 
    jetPainter.animateAllFrames = false;
    jetPainter.delay = 1;
    if (down === true) {jet.top += 20}
    down = false;
    if (right === true) {jet.left += 20}
    right = false;
    if (left === true) {jet.left -= 20}
    left = false;
    if (up === true) {jet.top -= 20}
    up = false;
    if (fire === true ) {
        makeBullet(re.getImg("bullet4"), 1,jet,20, true, 0);
        // shoot.play();
    }
    fire = false;

    if (jet.isHit === true) {
        lifeCounter--;
        if (lifeCounter === 0) {
        jetPainter.changeSheet(re.getImg("explosion3"),8,1,1);
        jetPainter.animateAllFrames = true;
    if (jetPainter.isLastImage) {
        jet.delete = true;
        u(endGame).scaleOut();
        u(endGame).style({transform: "translate(-50%, -50%)"})
        renderer.toggleRendering()
    }   
}
jet.isHit = false;
}
 
// eArray = physics.detectCollision(jet,[...eArray], 10, true);
 if (eArray.length < 2 )  {
    eArray = [...eArray, ...makeEnemies(6, jet.left, jet.top,jet.left + jet.width,jet.top + jet.height)];
}
};
// the player 
const jetPainter = new spriteSheetPainter(re.getImg("jet3"),1,1,1);
const jet = new entity("jet", jetPainter, jetBehavior);
eArray.push(jet);
u(jet).config({top: Math.round((space_canvas.height - jet.height)), left: Math.round((space_canvas.width - (jet.width * 0.5)) * 0.5) , width: (0.06 * wH), height: 150});
renderer.assemble(jet);
re.mount(space);
re.start();
renderer.toggleRendering();
