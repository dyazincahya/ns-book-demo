import { Frame, Observable } from "@nativescript/core";
import {
  NativeAdLoader,
  AdChoicesPlacement,
  NativeAdEventType,
} from "@nativescript/firebase-admob";

const context = new Observable();
const loader = new NativeAdLoader(
  "ca-app-pub-1640120316722376/1487881727",
  null,
  {
    nativeAdOptions: {
      adChoicesPlacement: AdChoicesPlacement.TOP_RIGHT,
    },
  }
);

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function nativeAdLoaded(event) {
  const view = event.object;

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
