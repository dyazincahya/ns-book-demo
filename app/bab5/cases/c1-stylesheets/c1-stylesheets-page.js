import { Observable, Frame } from "@nativescript/core";

const context = new Observable();

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}
