// let adCheckInterval = null;

// function skipAdIfPresent() {
//   const adTextClass = '.ytp-ad-text.ytp-ad-preview-text';
//   const adButtonClass = '.ytp-ad-skip-button.ytp-button';
//   const videoElement = document.querySelector('video');

//   adCheckInterval = setInterval(() => {
//     let adText = document.querySelector(adTextClass);
//     let skipButton = document.querySelector(adButtonClass);

//     if (adText) {
//       videoElement.currentTime = 100000;
//     }

//     if (skipButton) {
//       skipButton.click();
//     }
//   }, 1000);
// }

// function stopAdSkipping() {
//   if (adCheckInterval) {
//     clearInterval(adCheckInterval);
//     adCheckInterval = null;
//   }
// }

// // Listen for messages from the popup
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message === "startAdSkipper") {
//     skipAdIfPresent();
//     sendResponse({status: "Ad skipping started"});
//   } else if (message === "stopAdSkipper") {
//     stopAdSkipping();
//     sendResponse({status: "Ad skipping stopped"});
//   }
// });
