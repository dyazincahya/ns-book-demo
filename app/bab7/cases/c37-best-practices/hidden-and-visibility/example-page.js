import { Frame, ObservableArray } from "@nativescript/core";

const context = new ObservableArray();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("visibilityStatus", "visible");
  context.set("hiddenStatus", false);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function setVisibility(args) {
  const obj = args.object;
  if (obj.status) {
    context.set("visibilityStatus", obj.status);
  }
}

export function setHidden() {
  context.set("hiddenStatus", !context.hiddenStatus);
}
