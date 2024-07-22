import {
  Application,
  isAndroid,
  isIOS,
  Utils,
  Dialogs,
} from "@nativescript/core";

import { uploadFile, downloadFile } from "./bab7-helper";

import { GlobalModel } from "~/global_model";

var context = new GlobalModel([{ page: "Bab7" }]);

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView();
  sideDrawer.showDrawer();
}

export function downloadBgHttp() {
  downloadFile(
    "https://art.nativescript.org/logo/export/NativeScript_Logo_Wide_White_Blue_Rounded_Blue.png"
  );
}

export function uploadBgHttp() {
  uploadFile();
}
