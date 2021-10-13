const opener = build("div", {id: "opener"})
const pop = build("button", {id: "rules", className: "btn", innerText: "Rules"});
const scores = build("button", {id: "scores", className: "btn", innerText: "0:00"});
const pause = build("button", {id: "pause", className: "btn", innerText: "Pause", onclick: ()=>{ 
    if (pause.innerText === "play") {
        pause.innerText = "pause"
    } else {
        pause.innerText = "play"
    }
}});
const template = build("div", {id: "astroID"}, [pop, pause, scores]);
buildTo([template, opener], "body");
const rules = u(opener).appendTo("button", {id: "rule"}, 7)
const play = u(opener).appendTo("button", {id: "play", innerText: "play"}, 1)
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
"background-color": "gray",
display: "flex",
"align-items": "center",
"justify-content": "space-around",
"margin-right": "12px",
"border-radius": "30%"
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
    backgroundImage: "url("+"trash/space11.png"+")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "35px",
    position: "absolute",
    zIndex: "2",
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
u(scores).style({

})
