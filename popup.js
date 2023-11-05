let adCheckInterval = null;

function skipAdIfPresent() {
  const adTextClass = '.ytp-ad-text.ytp-ad-preview-text';
  const adButtonClass = '.ytp-ad-skip-button.ytp-button';
  const videoElement = document.querySelector('video');

  adCheckInterval = setInterval(() => {
    let adText = document.querySelector(adTextClass);
    let skipButton = document.querySelector(adButtonClass);

    if (adText) {
      videoElement.currentTime = 100000;
    }

    if (skipButton) {
      skipButton.click();
    }
  }, 1000);
}

function stopAdSkipping() {
  if (adCheckInterval) {
    clearInterval(adCheckInterval);
    adCheckInterval = null;
  }
}


document.getElementById('startButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: skipAdIfPresent
      });
    });
});

  document.getElementById('stopButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: stopAdSkipping
      });
    });
  });