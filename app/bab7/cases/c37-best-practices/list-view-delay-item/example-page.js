import { Frame, ObservableArray } from "@nativescript/core";

const context = new ObservableArray();
let tmpItems = [],
  data = [];
export function onNavigatingTo(args) {
  const page = args.object;

  data = Array.from({ length: 15 }).map((_, i) => `Item ${i + 1}`);
  tmpItems = [];
  context.set("items", tmpItems);
  loadItemsWithDelay(0);

  page.bindingContext = context;
}

export function onBackTap() {
  Frame.goBack();
}

// Fungsi untuk menambahkan item ke ListView dengan penundaan
function loadItemsWithDelay(index) {
  if (index < data.length) {
    setTimeout(() => {
      context.set("items", []);
      tmpItems.push(data[index]);
      context.set("items", tmpItems);
      // Rekursif untuk memuat item berikutnya
      loadItemsWithDelay(index + 1);
    }, 1000); // Menunda 1 detik untuk setiap item
  }
}
