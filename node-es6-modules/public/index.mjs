import ViewController from "./src/ViewController.mjs";

window.addEventListener("load", () => {
  const vc = new ViewController();
  vc.getProductList();
});
