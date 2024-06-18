import { ObservableArray } from "@nativescript/core";
import { SelectedPageService } from "./shared/selected-page-service";

export function GlobalModel(items) {
  SelectedPageService.getInstance().updateSelectedPage(items.page);
  // console.log("items global model", items);

  var arr = new ObservableArray(items);

  return arr;
}
