import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Switch");
  context.set("consoleText", "ON");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function checkedChanged(args) {
  // console.log("Switch checked:", args.value);
  context.set("consoleText", args.value ? "ON" : "OFF");
}
