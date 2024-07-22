import { Frame } from "@nativescript/core";
import { createViewModel } from "./c2-observable-view-model";

const context = new createViewModel();

export function onNavigatingTo(args) {
  const page = args.object;

  context.set("myName", "Kang Cahya");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}
