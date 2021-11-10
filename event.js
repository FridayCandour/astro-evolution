// line 2 to 14 deals with key event for pc and mobile
let right = false, left = false, up = false, down = false, fire = false;

const upcb = ()=>{up = true},
      downcb = ()=>{down = true},
     rightcb = ()=>{right = true},
     firecb = ()=>{fire = true},
     leftcb = ()=>{left = true
     // console.log("left")
};

continuesKeys(["ArrowLeft"], leftcb )
continuesKeys(["ArrowRight"], rightcb)
continuesKeys(["ArrowUp"], upcb)
continuesKeys(["ArrowDown"], downcb )
continuesKeys(["Enter"], firecb )
continuesKeys([" "], firecb )

const swipeEventsObject = {down: downcb, touch: firecb, up: upcb, right: rightcb, left: leftcb};
swipe(swipeEventsObject);