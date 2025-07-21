
window.addEventListener("runEndorser", async () => {
  const count = (await chrome.storage.local.get("skillCount")).skillCount || 10;

  const buttons = Array.from(document.querySelectorAll("button"))
    .filter(b => b.innerText.trim().toLowerCase() === "endorse");

  let endorsed = 0;
  for (const btn of buttons) {
    if (endorsed >= count) break;

    if (!btn.disabled && btn.offsetParent !== null) {
      btn.click();
      endorsed++;
      await new Promise(r => setTimeout(r, 500));
    }
  }

  alert(`Endorsed ${endorsed} skills.`);
});