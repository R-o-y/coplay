document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('coplay-this-page').addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      inject();
    });
  });
  document.getElementById('coplay-a-local-video').addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.create({ url: chrome.runtime.getURL("Video Player.html") });
    });
  });
});


function inject() {
  if (chrome.runtime.lastError) {
    console.error(chrome.runtime.lastError.message);
  }
  chrome.tabs.executeScript(null, { file: 'inject.js', allFrames: true });
  console.log('Injector executed.');
}