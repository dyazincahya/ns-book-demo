import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Tab View");
  context.set("consoleText", "First");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function tabChanged(args) {
  const tabView = args.object;
  // console.log("TabView selectedIndex:", tabView.selectedIndex);
  const items = ["First", "Second", "Third"];
  context.set("consoleText", items[tabView.selectedIndex]);
}
