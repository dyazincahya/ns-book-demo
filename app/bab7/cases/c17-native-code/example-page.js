import { Application, Frame, Observable } from "@nativescript/core";

// memanggil file Kotlin
const ToastHelper = com.kangcahya.ToastHelper;

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function showToast() {
  // pesan yang akan ditampilkan
  const message = "Hello, this Toast from Kotlin in NativeScript";

  // mendapatkan Application Context dengan bahasa Java
  const applicationContext =
    Application.android.foregroundActivity || Application.android.startActivity;

  // memanggil Method Toast yang ada di file Kotlin
  ToastHelper.showToast(applicationContext, message);
}
