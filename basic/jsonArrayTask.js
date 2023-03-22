// 상품명, 가격, 재고를 프로퍼티로 담고있는 Object를 3개 선언한다
// 3개의 Object를 1개의 Array 객체에 모두 담는다.
// JSON으로 변경시킨다.

// 프로토타입 생성하여 배열에 집어 넣기!

function Product(model, price, stock) {
  this.model = model;
  this.price = price;
  this.stock = stock;
}

// 내 풀이
// apple1 = new Product("iphone13", 130, 3);
// apple2 = new Product("ipad", 200, 5);
// apple3 = new Product("MacBook", 300, 4);
// let appleProduct = new Array(apple1, apple2, apple3);
// console.log(JSON.stringify(appleProduct));

let products = new Array();
products.push(new Product("iphone13", 130, 3));
products.push(new Product("ipad", 200, 5));
products.push(new Product("MacBook", 300, 4));

let productsJSON = JSON.stringify(products);
console.log(productsJSON);
