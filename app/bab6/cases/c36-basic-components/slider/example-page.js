import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Slider");
  context.set("consoleText", "-");

  context.set("sliderValue", 50);
  context.set("sliderMin", 0);
  context.set("sliderMax", 100);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function sliderChanged(args) {
  console.log("propertyName ", args.propertyName);
  console.log("Slider value changed from ", args.oldValue);
  console.log("Slider value changed to ", args.value);
  context.set("consoleText", context.sliderValue);
}
