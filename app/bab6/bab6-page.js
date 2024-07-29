import { Application, Frame, Observable } from "@nativescript/core";

const context = new Observable();
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
