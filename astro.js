const space = re.build("space");
space_canvas = buildCanvas("space_canvas"); 
space.append(space_canvas);
renderer.render(space_canvas,1);
const wH = space_canvas.width;
renderer.backgroundImage(re.getImg("space7"),6,true);
const waves = new audio(re.getAud("hum"),1,1);
const shoot = new audio(re.getAud("spacer",1,0.1));
// the player 
const jetPainter = new spriteSheetPainter(re.getImg("jet2"),1,1,1);
const jetBehavior = function (jet){
    
    jetPainter.animateAllFrames = false;
    jetPainter.delay = 8;
    // moving the player
    if (down === true) {jet.top += 20}
    down = false;

    if (right === true) {jet.left += 20}
    right = false;

    if (left === true) {jet.left -= 20}
    left = false;
    if (up === true) {jet.top -= 20}
    up = false;

    if (fire === true ) {
        makeBullet(re.getImg("bullet1"), 1,jet,60, true, 10)
        shoot.play();
        waves.play();
    }
    fire = false;
    if (eArray.length <= 1) {
        makeEnemies(6,2,6)
    }
    // if (jet.isHit === true) {

        // jetPainter.changeSheet(re.getImg("explosion"),8,6,1)
    // if (jetPainter.isLastImage) {
        // jet.delete = true;

    // }
}
};



const jet = new entity("jet", jetPainter, jetBehavior);
u(jet).config({top: Math.round((space_canvas.height - jet.height)), left: Math.round((space_canvas.width - (jet.width * 0.5)) * 0.5) , width: (0.06 * wH), height: 150});
renderer.toggleRendering()

u("#play").on("click", ()=>{
    u(opener).hide()
    renderer.toggleRendering()
});

renderer.assemble(jet);
re.mount(space);
re.start();