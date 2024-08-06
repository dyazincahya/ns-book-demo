import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Web View");

  context.set("source", "https://www.kang-cahya.com");
  context.set("consoleText", "SOURCE >> web: " + context.source);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function changeSource(args) {
  const obj = args.object;
  switch (obj.sourceType) {
    case "web":
      context.set("source", "https://www.kang-cahya.com");
      context.set("consoleText", "SOURCE >> web: " + context.source);
      break;
    case "local":
      context.set("source", "~/assets/html/index.html");
      context.set("consoleText", "SOURCE >> local: " + context.source);
      break;

    case "string":
      const stringHtml = `<div><h1>Kode HTML Statis by Kang Cahya</h1></div>`;
      context.set("source", stringHtml);
      context.set("consoleText", "SOURCE >> string: " + context.source);
      break;

    default:
      context.set("source", "https://www.kang-cahya.com");
      context.set("consoleText", "SOURCE >> web: " + context.source);
      break;
  }
}
