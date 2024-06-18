import {
  Application,
  isAndroid,
  isIOS,
  Utils,
  Dialogs,
} from "@nativescript/core";

import { showToast } from "./bab1-helper";

import { GlobalModel } from "~/global_model";

var context = new GlobalModel([{ page: "Bab1" }]);

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = context;
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView();
  sideDrawer.showDrawer();
}

export function saveToPhoneBookAndroid() {
  if (isAndroid) {
    const contact = {
      name: "Kang Cahya",
      phoneNumber: "08123456789",
      email: "admin@kang-cahya.com",
      address: "123 Main St, Indonesia",
      company: "ABC Company",
      jobTitle: "Software Engineer",
      notes: "This is a sample note.",
      website: "https://kang-cahya.com",
    };
    const uri = android.net.Uri.parse("content://contacts/people/");
    const intent = new android.content.Intent(
      android.content.Intent.ACTION_INSERT,
      uri
    );

    intent.setType(android.provider.ContactsContract.Contacts.CONTENT_TYPE);

    // Basic Information
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.NAME,
      contact.name
    );
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.PHONE,
      contact.phoneNumber
    );
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.EMAIL,
      contact.email
    );

    // Address Information
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.POSTAL,
      contact.address
    );

    // Organization
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.COMPANY,
      contact.company
    );
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.JOB_TITLE,
      contact.jobTitle
    );

    // Additional Information
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.NOTES,
      contact.notes
    );
    intent.putExtra(
      android.provider.ContactsContract.Intents.Insert.WEBSITE,
      contact.website
    );

    Utils.android.getCurrentActivity().startActivity(intent);
  } else {
    Dialogs.alert({
      title: "Info",
      message: "Hanya bisa berjalan di perangkat Android!",
      okButtonText: "OK",
      cancelable: true,
    });
  }
}

export function showToastAndroidJava() {
  if (isAndroid) {
    const context =
      Application.android.foregroundActivity ||
      Application.android.startActivity;
    const Toast = android.widget.Toast;
    Toast.makeText(
      context,
      "Hello from NativeScript!",
      Toast.LENGTH_SHORT
    ).show();
  } else {
    Dialogs.alert({
      title: "Info",
      message: "Hanya bisa berjalan di perangkat Android!",
      okButtonText: "OK",
      cancelable: true,
    });
  }
}

export function showToastAndroidKotlin() {
  if (isAndroid) {
    showToast("Hello this Toast from Kotlin in NativeScript");
  } else {
    Dialogs.alert({
      title: "Info",
      message: "Hanya bisa berjalan di perangkat Android!",
      okButtonText: "OK",
      cancelable: true,
    });
  }
}

export function saveToPhoneBookIOS() {
  if (isIOS) {
    const phoneNumber = "1234567890";
    const url = `telprompt:${phoneNumber}`;
    Utils.ios.openURL(url);
  } else {
    Dialogs.alert({
      title: "Info",
      message: "Hanya bisa berjalan di perangkat IOS!",
      okButtonText: "OK",
      cancelable: true,
    });
  }
}

export function showAlertIOS() {
  if (isIOS) {
    const alertController =
      UIAlertController.alertControllerWithTitleMessagePreferredStyle(
        "NativeScript",
        "Hello from NativeScript!",
        UIAlertControllerStyle.UIAlertControllerStyleAlert
      );

    const alertAction = UIAlertAction.actionWithTitleStyleHandler(
      "OK",
      UIAlertActionStyle.UIAlertActionStyleDefault,
      null
    );

    alertController.addAction(alertAction);

    const topViewController =
      UIApplication.sharedApplication.keyWindow.rootViewController;

    topViewController.presentViewControllerAnimatedCompletion(
      alertController,
      true,
      null
    );
  } else {
    Dialogs.alert({
      title: "Info",
      message: "Hanya bisa berjalan di perangkat IOS!",
      okButtonText: "OK",
      cancelable: true,
    });
  }
}
