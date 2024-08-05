import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Label");
  context.set(
    "consoleText",
    "Anda dapat menggunakan kombinasi FormattedString dan Span."
  );

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}
