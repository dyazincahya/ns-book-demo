import { Frame, Observable } from "@nativescript/core";

const context = new Observable();

export function onNavigatingTo(args) {
  const page = args.object;

  context.set("myBlog", "kang-cahya.com");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}
