import { createViewModel } from "./bab5-view-model";
import {
  check as checkPermission,
  request as requestPermission,
} from "@nativescript-community/perms";
import {
  Application,
  knownFolders,
  File,
  Folder,
  path,
  Frame,
  Http,
} from "@nativescript/core";

const context = new createViewModel();
export function onNavigatingTo(args) {
  const page = args.object;
  context.set("myBlog", "kang-cahya.com");

  requestStoragePermission();
  page.bindingContext = context;
}

export function onDrawerButtonTap(args) {
  const sideDrawer = Application.getRootView();
  sideDrawer.showDrawer();
}

export function openModule(args) {
  const obj = args.object;
  if (obj.moduleName) {
    Frame.topmost().navigate({
      moduleName: obj.moduleName,
      transition: {
        name: "fade",
      },
    });
  }
}

Http.getFile();

export function fileSystem() {
  requestStoragePermission();
  // const rootDir = android.os.Environment.getExternalStorageDirectory()
  //   .getAbsolutePath()
  //   .toString();
  // var androidDownloadsPath =
  //   android.os.Environment.getExternalStoragePublicDirectory(
  //     android.os.Environment.DIRECTORY_DOWNLOADS
  //   ).toString();

  // const folderPath = path.join(androidDownloadsPath);
  // const folder = Folder.fromPath(folderPath);
  // console.log(rootDir);
  // console.log(knownFolders.temp().path);

  // const file = folder.getFile("cahya.txt");
  // console.log(file.path);
  // file
  //   .writeText("Hello World!")
  //   .then(() => {
  //     console.log("File written successfully.");
  //   })
  //   .catch((error) => {
  //     console.log("Error writing file: " + error);
  //   });

  const folder = knownFolders.temp();
  console.log(folder.path);
  const file = folder.getFile("kangcahya.txt");
  console.log(file.path);
  file
    .writeText("Hello World!")
    .then(() => {
      console.log("File written successfully.");
    })
    .catch((error) => {
      console.log("Error writing file: " + error);
    });

  const read = File.fromPath(file.path);
  read
    .readText()
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {});
}

function requestStoragePermission() {
  checkPermission("storage").then((response) => console.log(response));
  requestPermission("storage").then((response) => {
    console.log(response);
  });
  // try {
  //   // Check if the permission is already granted
  //   const status = await checkPermission("storage");
  //   if (status === "authorized") {
  //     console.log("Storage permission already granted");
  //   } else {
  //     // Request the storage permission
  //     const result = await requestPermission("storage");
  //     if (result === "authorized") {
  //       console.log("Storage permission granted");
  //     } else {
  //       console.log("Storage permission denied");
  //     }
  //   }
  // } catch (error) {
  //   console.error("Error requesting storage permission", error);
  // }
}
