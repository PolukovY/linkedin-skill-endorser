
document.getElementById("run").addEventListener("click", async () => {
  const count = parseInt(document.getElementById("skillCount").value, 10);

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.storage.local.set({ skillCount: count });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      window.dispatchEvent(new CustomEvent("runEndorser"));
    }
  });
});
