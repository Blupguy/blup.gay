var messages = [
    "Welcome to the literary junk drawer!",
    "If the website breaks, it's a planned experience.",
    "Design trends were taken into no consideration",
    "Don't judge a book by it's cover... or site layout.",
    "Not pretty, but it's mine.",
    "Hey, sometimes your opponent is just having a good day.",
    "Never dig straight down.",
    "And check out bluphub.com!",
    "And check out femboylover.art!",
    "New web devs look up emmet abbreviation.",
    "More stories coming when i remember to update my websites!",
    "Null"
]

var titles = [
    "I am gay",
    "I like men",
    "Blup.gay",
    "Now with 20% less JS",
    "CSS is overrated",
    "Gay nerd central",
    "not a virus",
    "Eat a cookie"
]

function changeTitle(){
    return titles[Math.floor(Math.random() * titles.length)];
}

title.innerHTML = changeTitle();

function ChooseMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}

message.innerHTML = ChooseMessage();

function changeColor(button){
    message.innerHTML = ChooseMessage();
}