import { Frame, Observable } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Date and Time Picker");
  context.set("consoleText", "-");

  _setDateAndTimeProperties();

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function getDate() {
  const date = new Date(context.date);
  const dateFormated =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  context.set("consoleText", dateFormated);
}

export function getTime() {
  const time = new Date(context.time);
  const timeFormated = time.getHours() + ":" + time.getMinutes();

  context.set("consoleText", timeFormated);
}

function _setDateAndTimeProperties() {
  const currentTime = new Date();
  const date = new Date("2024-08-04");
  const minDate = new Date("2024-01-01");
  const maxDate = new Date("2026-12-31");

  context.set("time", currentTime);
  context.set("date", date);
  context.set("minDate", minDate);
  context.set("maxDate", maxDate);
}
