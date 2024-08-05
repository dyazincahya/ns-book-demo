import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Search Bar");
  context.set("consoleText", "-");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function onSubmited(args) {
  const queryText = args.object.text;
  context.set("consoleText", "Search for >> " + queryText);
}

export function onCleared() {
  context.set("consoleText", "Search Bar Cleared.");
}
