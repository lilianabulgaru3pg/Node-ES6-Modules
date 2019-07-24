import Api from "./api.mjs";

class ViewController {
  getProductList() {
    const productList = Api.requestData("GET", "products");
    productList
      .then(data => this.createTableProducts(data["products"]))
      .catch(e => alert(`An error occured, products can not be fetched! ${e}`));
  }

  createTableProducts(data) {
    const table = document.body.querySelector(".table-products");
    const fragment = document.createDocumentFragment();
    for (let { imgUrl, name, price, availability } of data) {
      const trNode = document.createElement("tr");
      trNode.className = "row";

      trNode.appendChild(
        this.createTableCell(
          "Image",
          `<img src="./images/${imgUrl}" alt="img" class="product-img">`
        )
      );
      trNode.appendChild(this.createTableCell("Product Name", name));
      trNode.appendChild(
        this.createTableCell(
          "Availability",
          availability ? "In stock" : "Out of stock"
        )
      );
      trNode.appendChild(this.createTableCell("Price", price));
      fragment.appendChild(trNode);
    }
    table.appendChild(fragment);
  }

  createTableCell(dataTitle, innerHtml) {
    const childNode = document.createElement("td");
    childNode.className = "cell";
    childNode.dataset.title = dataTitle;
    childNode.innerHTML = innerHtml;
    return childNode;
  }
}

export default ViewController;
