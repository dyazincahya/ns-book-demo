import { Frame, ObservableArray } from "@nativescript/core";

const context = new ObservableArray();
export function onNavigatingTo(args) {
  const page = args.object;
  loadDataWithDelay(3);
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

function loadDataWithDelay(second = 1) {
  context.set("isLoading", true);
  const delayInMilisecond = second * 1000;
  setTimeout(() => {
    const data = Array.from({ length: 50 }).map((_, i) => `Item ${i + 1}`);
    context.set("items", data);
    context.set("isLoading", false);
  }, delayInMilisecond);
}
