import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Html View");
  context.set("selectable", true);
  context.set(
    "consoleText",
    context.selectable
      ? "Teks dapat di select"
      : "Teks tidak dapat di select (Blok)"
  );

  const htmlString = `
    <h1 style="color: black; font-weight: bold;">
      <span style="color: #65adf1;">Html</span>View
    </h1>
  `;

  context.set("htmlString", htmlString);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function selectableToggle() {
  context.set("selectable", !context.selectable);
  context.set(
    "consoleText",
    context.selectable
      ? "Teks dapat di select"
      : "Teks tidak dapat di select (Blok)"
  );
}
