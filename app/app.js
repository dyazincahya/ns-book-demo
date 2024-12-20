import { Application } from "@nativescript/core";
import { Theme } from "@nativescript/theme";
import { firebase } from "@nativescript/firebase-core";
import { Admob } from "@nativescript/firebase-admob";

Theme.setMode(Theme.Light); // Theme.Dark Or Theme.Light

await firebase().initializeApp();
Admob.init();

Application.run({ moduleName: "app-root/app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
