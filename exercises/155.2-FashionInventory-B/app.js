let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];


function renderAverageCostPerDesigner (Inventario){

  let arr = [];
  for (let i = 0; i < Inventario.length; i++) {
    let cost = 0;
    let arr1 = {};
    arr1.name =Inventario[i].name;
    for (let j = 0; j < Inventario[i].shoes.length; j++) {
      
      cost = cost + Inventario[i].shoes[j].price;
            
    }
    arr1. averagePrice = cost/Inventario[i].shoes.length;
    arr.push(arr1);
  }
  return arr;
}
console.log(renderAverageCostPerDesigner(currentInventory));
