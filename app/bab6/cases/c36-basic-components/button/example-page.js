import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Button");
  context.set("consoleText", "-");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function buttonTap() {
  context.set("consoleText", "Button Tapped");
}
