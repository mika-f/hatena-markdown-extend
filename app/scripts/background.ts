import { browser } from "webextension-polyfill-ts";

browser.runtime.onInstalled.addListener(details => {
  console.log("previousVersion", details.previousVersion);
});

console.log(`'Allo 'Allo! Event Page`);
