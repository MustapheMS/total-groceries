// Good Luck 💪🏾

//Done 💯💯
function getTotalPrice(grocery){
    let total = 0;

    for(let i=0; i<grocery.length; i++){
        total = total + grocery[i].quantity*grocery[i].price;
    }

    return total;
}



  console.log(getTotalPrice([
    { product: "Milk", quantity: 5, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 },
    { product: "Bread", quantity: 1, price: 3.19 },
    { product: "EGG", quantity: 1, price: 2.50 }
  ]))
