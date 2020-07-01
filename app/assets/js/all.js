const obj = {
  data: {
    uuid: "8a8058c0-58d2-485b-b7fc-3c9be181cca7",
    products: []
  },
  getData: function () {
    const vm = this;
    const url = `https://course-ec-api.hexschool.io/api/${vm.data.uuid}/ec/products`;

    axios
      .get(url)
      .then(function (res) {
        console.log(res)
        vm.data.products = res.data.data;
        vm.render();
      })
  },
  render: function () {
    const productsList = document.querySelector("#productsList");
    const products = this.data.products;
    let str = "";
    products.forEach(function (item) {
      str += `
      <div class="card rounded">
        <div class="card_img card-img-top rounded-top"
              style="background: url(${item.imageUrl});">
        </div>
        <div class="card-body pt-3 pb-2">
          <h5 class="card-title m-0">${item.title}</h5>
          <p class="card-text text-right mb-2">
            <s class="text-gray-2 fz_14">${item.origin_price}</s><br>
            ${item.price}
          </p>
          <div class="btn btn-success w-100">Add to cart</div>
        </div>
      </div>`;
    });
    productsList.innerHTML = str;
  }
};
obj.getData();

