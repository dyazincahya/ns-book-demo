import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Segmented Bar");
  context.set("consoleText", "-");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function SegmentedBarChanged(args) {
  // console.log("SegmentedBarChanged", args.object.selectedIndex);
  const items = ["First", "Second", "Third"];
  context.set("consoleText", items[args.object.selectedIndex]);
}
