import { Application, Observable } from "@nativescript/core";
import { InterstitialAd, BannerAdSize } from "@nativescript/firebase-admob";

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
    /* 
      event : adLoaded, adClosed
     */
    ad.show({
      immersiveModeEnabled: true,
    });
  });

  ad.load();
}

export function bannerAdLoaded(args) {
  const banner = args.object;
  const adSize = new BannerAdSize(320, 50);
  banner.size = adSize;
  banner.load();
}
