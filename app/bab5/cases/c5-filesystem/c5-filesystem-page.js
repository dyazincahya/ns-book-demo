import {
  Frame,
  Observable,
  knownFolders,
  File,
  Folder,
  path,
} from "@nativescript/core";
import {
  check as checkPermission,
  request as requestPermission,
} from "@nativescript-community/perms";

const context = new Observable();
const downloadDir = android.os.Environment.getExternalStoragePublicDirectory(
  android.os.Environment.DIRECTORY_DOWNLOADS
).toString();

export function onNavigatingTo(args) {
  const page = args.object;

  context.set("consoleText", "Is ready");

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

export function checkPermissionX() {
  checkPerm(true);
}

export function requestPermissionX() {
  requestPerm(true);
}

export function createFolder() {
  requestStoragePermission();
  const folderPath = path.join(downloadDir);
  const folder = Folder.fromPath(folderPath);
  const newFolder = folder.getFolder("kang-cahya");
  console.log(newFolder.path);
  context.set("consoleText", newFolder.path);
}

export function createFileAndWrite() {
  requestStoragePermission();
  const folderPath = path.join(downloadDir, "kang-cahya");
  const folder = Folder.fromPath(folderPath);
  const newFile = folder.getFile("url-blog-kang-cahya.txt");
  newFile
    .writeText("https://www.kang-cahya.com")
    .then(() => {
      console.log("File written successfully.");
      context.set(
        "consoleText",
        "File written successfully >> " + newFile.path
      );
    })
    .catch((error) => {
      console.log("Error writing file: " + error);
      context.set("consoleText", "Error writing file: " + error);
    });
}

export function checkFolderAndFile() {
  const folderPath = path.join(downloadDir, "kang-cahya");
  const folder = Folder.fromPath(folderPath);
  const file = folder.getFile("url-blog-kang-cahya.txt");

  const folderExists = Folder.exists(folder.path);
  if (folderExists) {
    const exists = File.exists(file.path);
    if (exists) {
      context.set("consoleText", "Folder and File is exists");
    } else {
      context.set("consoleText", "Folder exists but File is not Exists");
    }
  } else {
    context.set("consoleText", "Folder not exists");
  }
}

export function readFile() {
  requestStoragePermission();
  const folderPath = path.join(downloadDir, "kang-cahya");
  const folder = Folder.fromPath(folderPath);
  const file = folder.getFile("url-blog-kang-cahya.txt");

  const readFile = File.fromPath(file.path);
  readFile
    .readText()
    .then((res) => {
      console.log(res);
      context.set("consoleText", "Content in File >> " + res);
    })
    .catch((error) => {
      context.set("consoleText", error);
    });
}

function requestStoragePermission(print = false) {
  checkPerm(print);
  requestPerm(print);
}

function checkPerm(print = false) {
  checkPermission("storage").then((response) => {
    if (print) {
      console.log(response);
      context.set(
        "consoleText",
        "Check Permission >> " + JSON.stringify(response)
      );
    }
  });
}

function requestPerm(print = false) {
  requestPermission("storage").then((response) => {
    if (print) {
      console.log(response);
      context.set(
        "consoleText",
        "Request Permission >> " + JSON.stringify(response)
      );
    }
  });
}
