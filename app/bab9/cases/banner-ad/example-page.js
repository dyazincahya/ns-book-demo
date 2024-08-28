import { Frame, Observable } from "@nativescript/core";
import { BannerAdSize } from "@nativescript/firebase-admob";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function bannerAdLoaded(args) {
  const banner = args.object;
  const adSize = new BannerAdSize(320, 50);
  banner.size = adSize;
  banner.load();
}
