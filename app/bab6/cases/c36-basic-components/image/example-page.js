import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Image");
  context.set("selectable", true);
  context.set(
    "consoleText",
    "Gambar berasal dari App_Resource dengan nama file Logo"
  );

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}
