// App_Resources/Android/src/main/java/com/kangcahya/ToastHelper.kt
package com.kangcahya

import android.content.Context
import android.widget.Toast

class ToastHelper {
    companion object {
        @JvmStatic
        fun showToast(context: Context, message: String) {
            Toast.makeText(context, message, Toast.LENGTH_LONG).show()
        }
    }
}