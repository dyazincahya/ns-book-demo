import { Application } from "@nativescript/core";

const ToastHelper = com.kangcahya.ToastHelper;

// Function to show a Toast message using Kotlin
export function showToast(message) {
  const context =
    Application.android.foregroundActivity || Application.android.startActivity;
  ToastHelper.showToast(context, message);
}
