import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Progress");
  context.set("value", 40);
  context.set("consoleText", "Progress 40%");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function plus10() {
  if (context.value < 100) {
    context.set("value", context.value + 5);
    context.set("consoleText", "Progress " + context.value + "%");
  } else {
    context.set("consoleText", "Progress done, 100%.");
  }
}

export function min10() {
  if (context.value > 0) {
    context.set("value", context.value - 5);
    context.set("consoleText", "Progress " + context.value + "%");
  }
}
