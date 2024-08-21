import { Frame, ObservableArray } from "@nativescript/core";

const context = new ObservableArray();
export function onNavigatingTo(args) {
  const page = args.object;

  const items = Array.from({ length: 100 }).map((_, i) => ({
    title: `Item ${i}`,
    showSomethingElse: i % 5 === 0,
  }));
  context.set("items", items);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function selectItemTemplate(item, index, items) {
  return item && item.showSomethingElse ? "anotherlayout" : "onelayout";
}
