"use strict";

var obj = {
  data: {
    uuid: "8a8058c0-58d2-485b-b7fc-3c9be181cca7",
    products: []
  },
  getData: function getData() {
    var vm = this;
    var url = "https://course-ec-api.hexschool.io/api/".concat(vm.data.uuid, "/ec/products");
    axios.get(url).then(function (res) {
      console.log(res);
      vm.data.products = res.data.data;
      vm.render();
    });
  },
  render: function render() {
    var productsList = document.querySelector("#productsList");
    var products = this.data.products;
    var str = "";
    products.forEach(function (item) {
      str += "\n      <div class=\"card rounded mb-5\">\n        <div class=\"card_img card-img-top rounded-top\"\n              style=\"background: url(".concat(item.imageUrl, ");\">\n        </div>\n        <div class=\"card-body pt-3 pb-2\">\n          <h5 class=\"card-title m-0\">").concat(item.title, "</h5>\n          <p class=\"card-text text-right mb-2\">\n            <s class=\"text-gray-2 fz_14\">$").concat(item.origin_price, "</s><br>\n            $").concat(item.price, "\n          </p>\n          <div class=\"btn btn-success w-100\">Add to cart</div>\n        </div>\n      </div>");
    });
    productsList.innerHTML = str;
  }
};
obj.getData();
//# sourceMappingURL=all.js.map
