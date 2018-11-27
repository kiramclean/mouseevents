document.oncontextmenu = suppressContextMenu;
var mouseBox = document.querySelector("#mouse-events");
var eventTypes = [
    "click",
    "dblclick",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "wheel"
];
for (var _i = 0, eventTypes_1 = eventTypes; _i < eventTypes_1.length; _i++) {
    var event_1 = eventTypes_1[_i];
    mouseBox.addEventListener(event_1, log);
}
function log(event) {
    var eventsToLog = [];
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (input) {
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
    var p = document.createElement("p");
    var text = document.createTextNode("\u2192 " + event.type + ": " + event.button);
    p.appendChild(text);
    var logBox = document.querySelector("#log");
    logBox.appendChild(p);
    p.scrollIntoView(false);
}
function suppressContextMenu(event) {
    event.preventDefault();
}
