import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  const busy = true;
  context.set("pageTitle", "Activity Indicator");
  context.set(
    "consoleText",
    "Activity Indicator >> " + (busy ? "Aktif" : "Tidak Aktif")
  );
  context.set("busy", busy);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function activityIndicatorToggle() {
  const busy = !context.busy;
  context.set(
    "consoleText",
    "Activity Indicator >> " + (busy ? "Aktif" : "Tidak Aktif")
  );
  context.set("busy", busy);
}
