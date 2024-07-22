import { Frame, Observable } from "@nativescript/core";

const context = new Observable();

export function onNavigatingTo(args) {
  const page = args.object;

  context.set("gestureName", "No Gesture");
  context.set("gestureData", "Is ready");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function onTap() {
  console.log("Tap");
  context.set("gestureName", "Tap");
  context.set("gestureData", "-");
}

export function onDoubleTap() {
  console.log("Double Tap");
  context.set("gestureName", "Double Tap");
  context.set("gestureData", "-");
}

export function onLongPress(args) {
  console.log("State >> ", args.state);
  console.log("Long Press");
  context.set("gestureName", "Long Press");
  context.set("gestureData", "State >> " + args.state);
}

export function onSwipe(args) {
  console.log("Direction >> ", args.direction);
  console.log("Swipe");
  context.set("gestureName", "Swipe");
  context.set("gestureData", "Direction >> " + args.direction);
}

export function onPan(args) {
  console.log("Pan");
  console.log("State >> ", args.state);
  // Distance , in DIPs, moved in the x direction from previous position.
  console.log("Delta X >> ", args.deltaX);
  console.log("Delta Y >> ", args.deltaY);

  context.set("gestureName", "Pan");
  context.set(
    "gestureData",
    "State >> " +
      args.state +
      " | " +
      "Delta X >> " +
      args.deltaX +
      " | " +
      "Delta Y >> " +
      args.deltaY
  );
}

export function onPinch(args) {
  console.log("Pinch");
  console.log("State >> ", args.state);
  console.log("Scale >> ", args.scale);
  context.set("gestureName", "Pinch");
  context.set(
    "gestureData",
    "State >> " + args.state + " | " + "Scale >> " + args.scale
  );
}
