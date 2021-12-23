let i = -1;
const gameName = build("p", {
  id: "gameName",
  innerText: "ASTRO EVOLUTION - genesis",
});
const opener = build("div", { id: "opener" }, gameName);
const pop = build("button", {
  id: "rules",
  className: "btn",
  innerText: "Menu",
});
const scores = build("button", {
  id: "scores",
  className: "btn",
  start: () => {
    i++;
    u(scores).text(i);
    let img = u(scores).appendTo("img", {
      src: "images/gem.png",
      height: 16,
      width: 16,
    });
    u(img).style({ margin: "0px 10px" });
  },
});

scores.start();
const pause = build("button", {
  id: "pause",
  className: "btn",
  innerText: "Pause",
  onclick: () => {
    if (pause.innerText === "play") {
      pause.innerText = "pause";
    } else {
      pause.innerText = "play";
    }
  },
});

const bar = build("div", { id: "bar" });
const lifeBar = build("div", { id: "lifeBar", className: "lifeBar" }, bar);

const template = build("div", { id: "astroID" }, [pop, pause, scores, lifeBar]);
buildTo([template, opener], "body");
const rules = u(opener).appendTo("button", { id: "rule" }, 7);
const play = u(opener).appendTo("button", { id: "play", innerText: "play" }, 1);
const endGame = u(document.body).appendTo("div", { id: "end" });
const xButton = build("img", { src: "x.svg" });
xButton.onclick = u(endGame).scaleIn;

const wrapper = build("div", { id: "wrapper" });
const text = [
  // button texts
  "Rules of the game",
  "Buy new weapoons and life count",
  "Highest game scores",
  "Buy a new space vehicle",
  "About astro evolution and devs",
  "Buy us a coffee",
  "About the game engine",
];

const navs = [
  "/game-rules",
  "/buy-weapoons",
  "/high-scores",
  "/space-vehicles",
  "/about-astro-evolution",
  "/buy-us-a-coffee",
  "/about-uiedbook-game-engine",
];

const infos = [
  build("div", {
    innerText: `
      The rules of the astro evolution - genesis is primarily for the space vehicle to survive and earn space stars that can be used to purchace other needed items in by the users.

      as the the enemies comes at random your aim is to eliminate as many as possible to get enough score to move to the next level of the game.

      try as much as possible to avoid being shoot or going out of lives in the live bar at which the game will end and you can only begin from the beginning of the whole game.

    `,
  }),
  build("div", {
    innerText: `
    This feature is coming soon :)
    `,
  }),
  build(
    "div",
    {
      innerText: `
    congratulations nerd here is your highest score

    `,
    },
    build("p", {
      innerText: "heighest score - 9000 space golds in one mission",
    })
  ),
  build("div", {
    innerText: `
    This feature is coming soon :)
    `,
  }),
  build("div", {
    innerText: `
    I really want to apreciate thomas for being very ready to help out with this astro evolution demo, his contributions to code design and bug inspetion has been so immersively helpful to me and the uiedbok javascript library,
    his is a public hero.
    
    am also gratefull to simen de lang for being my role model and a great helper to my beginning and people out know him and how good he is to the dev javascript community.

    am friday imudia creator of the uiedbook javascript library and it's imbuilt game infrasture, i really couldn't have achieved anything if not the goodness God has shown to me, 
    `,
  }),
  build("div", {
    innerText: `
    If you apprecite the uiedbook library, this game game demo and you want to show some love, you can do that with the details below.
    patroen: @fridaycandour .
    paypal: fridaymichaels662@gmail.com .
    `,
  }),
  build("div", {
    innerText: `
    uiedbook is a javascript/typescript library for building web apps, it provides a system of APIs that allows you to do more and writeless, and it's now ships with the tiny but one of most easy to use, fast and less opionated game development engine solution in the ecosystem.
    
    and a big thank you to the fan base, we promise to keep scaling.
    `,
  }),
];

function gameRouteHandler(route) {
  const i = navs.findIndex((nav) => nav === route);
  u(endGame).scaleOut();
  endGame.innerHTML = "";
  u(endGame).add(xButton);
  endGame.append(infos[i]);
}

rules.forEach((rule, i) => {
  let link = route(navs[i], gameRouteHandler);
  u(link).style({
    width: "100%",
    textDecoration: "none",
    color: "white",
    textAlign: "start",
    padding: "auto",
  });
  link.innerText = text[i];
  rule.append(link);
});
