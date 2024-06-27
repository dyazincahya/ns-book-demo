# Pertahankan semua kelas dan metode di paket NativeScript
-keep class com.tns.** { *; }
-keep class org.nativescript.** { *; }

# Abaikan peringatan dari paket NativeScript
-dontwarn com.tns.**
-dontwarn org.nativescript.**

# Pertahankan anotasi
-keepattributes *Annotation*

# Pertahankan kelas dan metode yang digunakan oleh refleksi
-keep class * {
    public <methods>;
    public <fields>;
}

# Pertahankan semua kelas dan metode yang ditandai dengan anotasi @Keep
-keep @com.google.android.gms.common.annotation.Keep class * { *; }
-keep @androidx.annotation.Keep class * { *; }

# Pertahankan semua metode dengan anotasi tertentu
-keepclassmembers class ** {
    @com.google.android.gms.common.annotation.Keep *;
    @androidx.annotation.Keep *;
}

# Pertahankan semua class view yang didefinisikan di XML layout
-keepclassmembers class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
}

# Pertahankan semua inner class
-keepclassmembers class **.** {
    *;
}

# Pertahankan semua enumerations
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

# Pertahankan semua interface yang digunakan
-keep interface * {
    *;
}

# Tambahkan aturan tambahan sesuai kebutuhan aplikasi Anda

