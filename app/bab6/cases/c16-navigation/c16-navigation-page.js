import { Frame, Observable, Utils } from "@nativescript/core";

const context = new Observable();
export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function goToPage2() {
  Frame.topmost().navigate({
    moduleName: "bab6/cases/c16-navigation/c16-navigation2-page",
    transition: {
      name: "fade",
    },
    context: {
      fullName: "Kang Cahya",
      blog: "https://kang-cahya.com",
    },
  });
}

export function aboutPage() {
  alert("About Page");
}

export function blogPage() {
  Utils.openUrl("https://www.kang-cahya.com/");
}

export function feedbackPage() {
  alert("Feedback Page");
}

export function sharePage() {
  alert("Share Page");
}
