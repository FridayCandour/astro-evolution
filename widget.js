let i = -1;
const opener = build("div", {id: "opener"})
const pop = build("button", {id: "rules", className: "btn", innerText: "Menu"});
const scores = build("button", {id: "scor0es", className: "btn", start: ()=>{
    i++;
    u(scores).text(i);
    let img = u(scores).appendTo("img", { src: "images/gem.png", height: 16, width: 16 });
    u(img).style({margin: "0px 10px"})
}
});
u(scores).style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
scores.start();
const pause = build("button", {id: "pause", className: "btn", innerText: "Pause", onclick: ()=>{ 
    if (pause.innerText === "play") {
        pause.innerText = "pause"
    } else {
        pause.innerText = "play"
    }
}});
const bar = build("div", {id: "bar"})
const lifeBar = build("div", {id: "lifeBar", className: "lifeBar"},bar);
css("#lifeBar",
    {
        width: "20%",
        height: "40%",
        border:" 2px grey solid"
    });
css("#bar",
    {
        width: "100%",
        height: "98%",
        "background-color": "#36f76c"
});

const template = build("div", { id: "astroID" }, [pop, pause, scores, lifeBar]);
buildTo([template, opener], "body");
const rules = u(opener).appendTo("button", {id: "rule"}, 7);
const play = u(opener).appendTo("button", {id: "play", innerText: "play"}, 1);
const endGame = u(document.body).appendTo("div", { id: "end" });
const buttons = u(endGame).appendTo("button", {id: "button"}, 4);
// console.log(endGame);
css("#end",
{
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    "transform-origin": "center",

});
css("#rule",
{
    "margin-top": "9px",
    color: "grey",
    "min-width": "40px",
    "min-height": "80px",
    "max-width": "70%",
    border: "1px gray solid",
    display: "flex",
    "align-items": "center",
    "padding-left": "2rem",
    "font-size": "1.9rem",
    "text-Shadow": "0px 0px 2px black",
    "background-color": "transparent",
    border: "0px 0px 1px 1px",
    "border-radius": "12px",
    transition: "all 0.4s ease"
});
css("#rule:hover",
{
    transform: "scale(1.04)",
    color: "aqua"
});
css(".btn",
{"font-family": "courier",
"font-size": "14px",
padding: "4px",
"max-width": "10%",
height: "3vh",
"background-color": "#ff9800",
display: "flex",
"align-items": "center",
"justify-content": "space-around",
"margin-right": "12px",
"border-radius": "10%"
});

u(template).style({
    width: "100%",
    height: "5vh",
    // backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    zIndex: "1",
});

u(opener).style({
    width: "100vw",
    height: "100vh",
    backgroundImage: "url("+"background.jpg"+")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "35px",
    position: "absolute",
    zIndex: "2",
    overflow: "hidden",
    color: "white",
})
const text = [
    // button texts
    'Rules of the game', 
'Buy new weapoons and life count',
 'Highest game scores',
  'Buy a new space vehicle', 
  'About astro evolution and devs', 
  'Buy us a coffee', 
  'About the game engine'
]
rules.forEach((rule, i )=> {
    rule.innerText = text[i];
});
u(pop).style({
    position: "relative",
    // zIndex: "22",
})
u(play).style({
    maxWidth: "10rem",
    fontSize: "2rem",
    position: "relative",
    margin: "2.3rem 0px 10px 30%",
    borderRadius: "10px",
    padding: "10px"
})

const space = game.build("space");
space_canvas = buildCanvas("space_canvas"); 
space.append(space_canvas);

u(endGame).style({
    width: "80%",
    height: "80%",
    backgroundColor: "#18163D",
    backgroundImage: "url("+"space11.png"+")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "absolute",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "3px #EDFEFD solid",
    boxShadow: "0px 0px 9px #EDFEFD",
    zIndex: 1,
    flexwrap: "wrap"
})

const endText = ["Play Again", "Quit Game", "Highest Scores", "Change Jet"]
buttons.forEach((button, i )=> {
    button.innerText = endText[i];

});
css("#button",
{
    color: "white",
    "min-width": "30px",
    "min-height": "60px",
    "max-width": "50%",
    border: "1px gray solid",
    display: "flex",
    "align-items": "center",
    "padding-left": "2rem",
    "font-size": "1.4rem",
    "text-Shadow": "0px 0px 2px black",
    "background-color": "aqua",
    border: "0px 0px 1px 1px",
    "border-radius": "6px",
    margin: "8rem"
});
