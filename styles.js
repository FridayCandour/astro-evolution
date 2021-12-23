u(document.body).style({
  margin: "0px",
  padding: "0px",
  overflow: "hidden",
});

u(gameName).style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "3rem",
  fontFamily: "courier",
  textShadow: "0px 0px 18px whitesmoke",
});
u(scores).style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

css("#lifeBar", {
  width: "20%",
  height: "40%",
  border: " 2px grey solid",
});
css("#bar", {
  width: "100%",
  height: "98%",
  "background-color": "#36f76c",
});

css("#rule", {
  "margin-top": "9px",
  color: "grey",
  "min-width": "40px",
  "min-height": "60px",
  "max-width": "60%",
  border: "1px gray solid",
  display: "flex",
  "align-items": "center",
  "padding-left": "2rem",
  "font-size": "1.9rem",
  "text-Shadow": "0px 0px 2px black",
  "background-color": "transparent",
  border: "0px 0px 1px 1px",
  "border-radius": "12px",
  transition: "all 0.4s ease",
});
css("#rule:hover", {
  transform: "scale(1.04)",
  color: "aqua",
});
css(".btn", {
  "font-family": "courier",
  // "font-size": "14px",
  padding: "4px",
  "max-width": "10%",
  height: "3vh",
  "background-color": "#ff9800",
  display: "flex",
  "align-items": "center",
  "justify-content": "space-around",
  "margin-right": "12px",
  "border-radius": "10%",
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
  backgroundImage: "url(" + "background.jpg" + ")",
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
});

u(pop).style({
  position: "relative",
  // zIndex: "22",
});
u(play).style({
  maxWidth: "10rem",
  fontSize: "2rem",
  position: "relative",
  margin: "2.3rem 0px 10px 30%",
  borderRadius: "10px",
  padding: "10px",
});

u(endGame).style({
  width: "70%",
  height: "70%",
  backgroundColor: "#18163D",
  backgroundImage: "url(" + "space11.png" + ")",
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
  zIndex: 3,
  color: "#f8f8f8",
  padding: "4rem",
  fontSize: "22px",
  fontWeight: "1000",
  textShadow: "2px 0px 15px black",
});

u(xButton).style({
  maxWidth: "50px",
  position: "absolute",
  top: "2px",
  right: "2px",
});

css("#button", {
  color: "white",
  "min-width": "20%",
  "min-height": "160px",
  "max-width": "50%",
  "font-weight": "1000",
  border: "1px gray solid",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "padding-left": "2rem",
  "font-size": "2rem",
  "text-Shadow": "0px 0px 2px black",
  "background-color": "aqua",
  // border: "0px 0px 1px 1px",
  "border-radius": "16px",
  margin: "8rem",
});

u(wrapper).style({
  width: "80vw",
  height: "80vh",
  backgroundColor: "#18163D",
  backgroundImage: "url(" + "space11.png" + ")",
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
  zIndex: 11,
  flexWrap: "wrap",
});
