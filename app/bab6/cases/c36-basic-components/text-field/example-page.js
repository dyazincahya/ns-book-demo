import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Text Field");
  context.set("consoleText", "-");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function textChanged(args) {
  const textField = args.object;
  context.set("consoleText", textField.text);
}
