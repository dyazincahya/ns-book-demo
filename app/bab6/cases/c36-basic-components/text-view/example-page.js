import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Text View");
  context.set("consoleText", "-");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function textChanged(args) {
  const textView = args.object;
  context.set("consoleText", textView.text);
}
