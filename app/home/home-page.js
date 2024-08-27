import { Application, Frame } from "@nativescript/core";
import { BannerAdSize } from "@nativescript/firebase-admob";

import { GlobalModel } from "~/global_model";

var context = new GlobalModel([{ page: "Home" }]);

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView();
  sideDrawer.showDrawer();
}

export function openModule(args) {
  const obj = args.object;
  if (obj.moduleName) {
    Frame.topmost().navigate({
      moduleName: obj.moduleName,
      transition: {
        name: "fade",
      },
    });
  }
}

export function bannerAdLoaded(args) {
  const banner = args.object;
  const adSize = new BannerAdSize(320, 50);
  banner.size = adSize;
  banner.load();
}
