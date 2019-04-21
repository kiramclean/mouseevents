// TODO:
// - select pointer events
//    - pop down checkboxes for all the pointer events
//    - select all pointer events
// - select touch events
//    - pop down checkboxes for all the touch events
//    - select all touch events
// - select mouse events
//    - pop down checkboxes for all the mouse events
//    - select all mouse events
// - hide scroll bar on mouse pane
// - tooltips for mouse event descriptions
//    - links to MDN
document.oncontextmenu = suppressContextMenu;
const mouseBox = document.querySelector("#mouse-events");
const eventTypes = [
    "click",
    "dblclick",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "touchstart",
    "touchmove",
    "touchend",
    "wheel"
];
for (let event of eventTypes) {
    mouseBox.addEventListener(event, log);
}
function log(event) {
    const eventsToLog = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(input => {
        if (input.checked) {
            eventsToLog.push(input.value);
        }
    });
    if (!eventsToLog.includes(event.type)) {
        return;
    }
    console.log(event);
    appendToLog(event);
}
function appendToLog(event) {
    const p = document.createElement("p");
    const text = document.createTextNode(`→ ${event.type}: ${event.button}`);
    p.appendChild(text);
    const logBox = document.querySelector("#log");
    logBox.appendChild(p);
    p.scrollIntoView(false);
}
function suppressContextMenu(event) {
    event.preventDefault();
}
