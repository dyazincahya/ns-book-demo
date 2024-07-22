import { Http, path, knownFolders } from "@nativescript/core";
import { session } from "@nativescript/background-http";

export function uploadFile() {
  // Membuat sesi upload
  let _session = session("file-download");

  // Konfigurasi permintaan upload
  let request = {
    url: "https://httpbin.org/post",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    description: "Uploading a file...",
  };

  // File yang akan diupload
  let file = path.join(
    knownFolders.documents().getFolder("Download").path,
    "file.jpg"
  );

  // Mulai upload
  let task = _session.uploadFile(file, request);

  // Menangani acara progress
  task.on("progress", (e) => {
    console.log(`Uploaded ${e.currentBytes} / ${e.totalBytes}`);
  });

  // Menangani acara complete
  task.on("complete", (e) => {
    console.log("Upload complete!");
  });

  // Menangani acara error
  task.on("error", (e) => {
    console.error("Upload error:", e.error);
  });
}

export function downloadFile(url) {
  let saveLocation = path.join(
    knownFolders.documents().getFolder("Download").path,
    "file.jpg"
  );

  console.log("Downloading...");
  Http.getFile(url, saveLocation)
    .then(function (file) {
      alert("Successfully downloaded");
    })
    .catch(function (error) {
      alert("error occurred!");
    });
}
