import { Frame, Observable } from "@nativescript/core";
import { InterstitialAd } from "@nativescript/firebase-admob";

const context = new Observable();
const ad = InterstitialAd.createForAdRequest(
  "ca-app-pub-1640120316722376/5732316867"
);

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function loadInterstisialAd() {
  ad.onAdEvent((event, error, data) => {
    // if (event === AdEventType.LOADED) {
    //   console.log("rewarded", "loaded");
    // } else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
    //   console.error("loading error", error);
    // }
    ad.show({
      immersiveModeEnabled: true,
    });
  });

  ad.load();
}
