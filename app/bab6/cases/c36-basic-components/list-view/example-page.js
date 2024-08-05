import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "List View");

  const items = Array.from({ length: 100 }).map((_, i) => ({
    title: `Item ${i}`,
  }));
  context.set("items", items);

  context.set("consoleText", "Total ada " + items.length + " Items");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function itemTap(args) {
  const listView = args.object;
  // console.log("Tapped index", args.index);
  // console.log("Tapped item", listView.items[args.index]);

  context.set("consoleText", "Tapped " + listView.items[args.index].title);
}

export function refresh__x(args) {
  const page = args.object.page;
  const listView = page.getViewById("kc-list");

  listView.refresh();

  context.set("consoleText", "Refreshed");
}

export function scrollToIndex__x(args) {
  const page = args.object.page;
  const listView = page.getViewById("kc-list");

  listView.scrollToIndex(50);

  context.set("consoleText", "Scrolled to index 50");
}

export function scrollToIndexAnimated__x(args) {
  const page = args.object.page;
  const listView = page.getViewById("kc-list");

  listView.scrollToIndexAnimated(74);

  context.set("consoleText", "Scrolled to index 74 with animation");
}
