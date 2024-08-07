import { Application, Dialogs, Frame, Observable } from "@nativescript/core";

const context = new Observable();
const applicationContext = Application.android.context;
const themeId = applicationContext
  .getResources()
  .getIdentifier(
    "CustomAlertDialogTheme",
    "style",
    applicationContext.getPackageName()
  );

export function onNavigatingTo(args) {
  const page = args.object;

  context.set("pageTitle", "Alert");
  context.set("consoleText", "-");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function showAlert() {
  Dialogs.alert({
    title: "Alert!",
    message: "Please try again later.",
    okButtonText: "OK",
    cancelable: true,
    theme: themeId,
  }).then(() => {
    context.set("consoleText", "Dialog alert closed.");
  });
}

export function showAction() {
  Dialogs.action({
    title: "Action!",
    message: "Choose your language:",
    cancelButtonText: "Cancel",
    actions: ["TypeScript", "JavaScript", "PHP"],
    cancelable: true,
    destructiveActionsIndexes: [2],
    theme: themeId,
  }).then((result) => {
    // console.log(result);
    context.set("consoleText", "Selected Action: " + result);
  });
}

export function showConfirm() {
  Dialogs.confirm({
    title: "Confirm!",
    message: "Are you sure you want to do this?",
    okButtonText: "Yes",
    cancelButtonText: "No",
    neutralButtonText: "Cancel",
    theme: themeId,
  }).then((result) => {
    // console.log(result);
    context.set("consoleText", "Selected Confirm: " + result);
  });
}

export function showPrompt() {
  Dialogs.prompt({
    title: "Prompt!",
    message: "Enter the name of this framework:",
    defaultText: "NativeScript",
    okButtonText: "OK",
    neutralButtonText: "Cancel",
    // cancelable: true,
    // cancelButtonText: 'Cancel',
    // capitalizationType: 'none',
    // inputType: 'email',
    theme: themeId,
  }).then((result) => {
    // console.log(result);
    context.set("consoleText", result.text);
  });
}

export function showLogin() {
  Dialogs.login({
    title: "Login!",
    message: "Enter your credentials",
    okButtonText: "Login",
    cancelButtonText: "Cancel",
    userName: "NativeScript",
    password: "hunter2",
    // neutralButtonText: 'Neutral',
    // cancelable: true,
    // passwordHint: 'Your password',
    // userNameHint: 'Your username',
    theme: themeId,
  }).then((result) => {
    console.log(result);
    context.set("consoleText", "Data Login: " + JSON.stringify(result));
  });
}
