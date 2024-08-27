import { Application, Observable } from "@nativescript/core";
import {
  InterstitialAd,
  RewardedAd,
  NativeAdLoader,
  AdChoicesPlacement,
  NativeAdEventType,
  BannerAdSize,
} from "@nativescript/firebase-admob";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView();
  sideDrawer.showDrawer();
}

export function loadInterstisialAd() {
  const ad = InterstitialAd.createForAdRequest(
    "ca-app-pub-1640120316722376/5732316867"
  );

  ad.onAdEvent((event, error, data) => {
    if (event === AdEventType.LOADED) {
      console.log("rewarded", "loaded");
      // ad.show({
      //   immersiveModeEnabled: true,
      // });
    } else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
      console.error("loading error", error);
    }
    ad.show({
      immersiveModeEnabled: true,
    });
  });

  ad.load();
}

export function loadRewardedAd() {
  const ad = RewardedAd.createForAdRequest(
    "ca-app-pub-1640120316722376/1917496259"
  );

  ad.onAdEvent((event, error, data) => {
    if (event === AdEventType.LOADED) {
      console.log("rewarded", "loaded");
    } else if (event === AdEventType.FAILED_TO_LOAD_EVENT) {
      console.error("loading error", error);
    }
    ad.show({
      immersiveModeEnabled: true,
    });
  });

  ad.load();
}

export function nativeAdLoaded(event) {
  const view = event.object;

  const loader = new NativeAdLoader(
    "ca-app-pub-1640120316722376/1487881727",
    null,
    {
      nativeAdOptions: {
        adChoicesPlacement: AdChoicesPlacement.TOP_RIGHT,
      },
    }
  );

  loader.onAdEvent((event, error, data) => {
    if (event === NativeAdEventType.LOADED) {
      const ad = data;

      const headLineView = view.getViewById("headLineView");
      headLineView.text = ad.headline;
      const mediaView = view.getViewById("mediaView");
      view.mediaView = mediaView;
      mediaView.mediaContent = ad.mediaContent;
      const callToActionButton = view.getViewById("callToActionView");
      view.callToActionView = callToActionButton;
      callToActionButton.text = ad.callToAction;
      const bodyView = view.getViewById("bodyView");
      bodyView.text = ad.body;
      view.nativeAd = ad;
      console.log("nativead loaded");
    } else if (event === "adFailedToLoad") {
      console.log("nativead failed to load", error);
    }
  });

  loader.load();
}

export function bannerAdLoaded(args) {
  const banner = args.object;
  const adSize = new BannerAdSize(320, 50);
  banner.size = adSize;
  banner.load();
}
