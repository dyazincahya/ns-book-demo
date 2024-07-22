import { Frame, ObservableArray } from "@nativescript/core";

const context = new ObservableArray();

export function onNavigatingTo(args) {
  const page = args.object;

  getAnimals();

  page.bindingContext = context;
}

function getAnimals() {
  const animalsArray = [
    { name: "angsa" },
    { name: "bebek" },
    { name: "ayam" },
    { name: "kucing" },
    { name: "anjing" },
    { name: "sapi" },
    { name: "kuda" },
    { name: "kambing" },
    { name: "kelinci" },
    { name: "domba" },
    { name: "gajah" },
    { name: "harimau" },
    { name: "singa" },
    { name: "jerapah" },
    { name: "zebra" },
    { name: "badak" },
    { name: "kuda nil" },
    { name: "buaya" },
    { name: "iguana" },
    { name: "komodo" },
    { name: "ular" },
    { name: "katak" },
    { name: "kupu-kupu" },
    { name: "lebah" },
    { name: "semut" },
    { name: "kecoa" },
    { name: "lalat" },
    { name: "nyamuk" },
    { name: "cicak" },
    { name: "tokek" },
    { name: "ikan" },
    { name: "hiu" },
    { name: "lumba-lumba" },
    { name: "paus" },
    { name: "penyu" },
    { name: "ubur-ubur" },
    { name: "gurita" },
    { name: "kerang" },
    { name: "kura-kura" },
    { name: "burung hantu" },
    { name: "elang" },
    { name: "rajawali" },
    { name: "merpati" },
    { name: "burung pipit" },
    { name: "burung kenari" },
    { name: "kakatua" },
    { name: "pelikan" },
    { name: "babi" },
    { name: "beruang" },
  ];

  context.set("animals", animalsArray);
}

export function onBackTap() {
  Frame.goBack();
}
