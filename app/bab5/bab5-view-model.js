import { Observable } from "@nativescript/core";

export function createViewModel() {
  const viewModel = new Observable();
  viewModel.myName = "Kang Cahya";

  return viewModel;
}
