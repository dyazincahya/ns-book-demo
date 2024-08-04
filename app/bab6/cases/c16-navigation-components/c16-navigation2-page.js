import { Frame, Observable, Utils } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;
  const navData = page.navigationContext;

  context.set("fullName", navData.fullName);
  context.set("blog", navData.blog);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function blogPage() {
  Utils.openUrl("https://www.kang-cahya.com/");
}
