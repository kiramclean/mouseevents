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
  "touchend"
  "wheel"
];

for (let event of eventTypes) {
  mouseBox.addEventListener(event, log);
}

function log(event: MouseEvent) {
  const eventsToLog: string[] = [];
  const checkboxes = document.querySelectorAll<HTMLInputElement>(
    'input[type="checkbox"]'
  );

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

function appendToLog(event: MouseEvent) {
  const p = document.createElement("p");
  const text = document.createTextNode(`→ ${event.type}: ${event.button}`);
  p.appendChild(text);
  const logBox = document.querySelector("#log");
  logBox.appendChild(p);
  p.scrollIntoView(false);
}

function suppressContextMenu(event: MouseEvent) {
  event.preventDefault();
}
