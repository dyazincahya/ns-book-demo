import { Application, Frame } from "@nativescript/core";

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
