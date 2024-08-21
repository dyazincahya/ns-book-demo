import { Application } from "@nativescript/core";

// memanggil file Kotlin
const ToastHelper = com.kangcahya.ToastHelper;

export function showToast() {
  // pesan yang akan ditampilkan
  const message = "Hello, this Toast from Kotlin in NativeScript";

  // mendapatkan Application Context dengan bahasa Java
  const applicationContext =
    Application.android.foregroundActivity || Application.android.startActivity;

  // memanggil Method Toast yang ada di file Kotlin
  ToastHelper.showToast(applicationContext, message);
}
