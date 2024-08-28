import { Frame, Observable } from "@nativescript/core";
import { RewardedAd } from "@nativescript/firebase-admob";

const context = new Observable();
const ad = RewardedAd.createForAdRequest(
  "ca-app-pub-1640120316722376/1917496259"
);

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function loadRewardedAd() {
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
