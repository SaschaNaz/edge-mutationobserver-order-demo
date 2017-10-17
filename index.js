button.addEventListener("click", addChild);

const observer = new MutationObserver(records => {
  for (const record of records) {
    for (const addedNode of record.addedNodes) {
      log(addedNode.textContent);
    }
  }
});
observer.observe(target, {
  childList: true
});

function log(text) {
  const p = document.createElement("p");
  p.textContent = text;
  logger.insertBefore(p, logger.firstChild);
}

function addChild() {
  const child = document.createElement("p")
  child.textContent = "mutation";
  target.appendChild(child);
  log("add child");
}
