import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Scroll View");
  context.set("consoleText", "Vertical Scroll");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function scroll(args) {
  // console.log("Scrolled", {
  //   scrollX: args.scrollX,
  //   scrollY: args.scrollY,
  // });

  if (args.scrollY === 0) {
    context.set("consoleText", "Vertical Scroll");
  } else {
    context.set(
      "consoleText",
      `Scroll-X: ${args.scrollX} <=> Scroll-Y: ${args.scrollY}`
    );
  }
}
