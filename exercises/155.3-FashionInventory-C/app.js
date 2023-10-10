let currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
    // your code here
    let arr = [];
    for (let i = 0; i < shoeList.length; i++) {
      let arr1 = [shoeList[i].name];
      for (let j = 0; j < shoeList[i].shoes.length; j++) {
      
        let arr2 =[];
        arr2 = shoeList[i].shoes[j].name.split(' ');
        for (let k = 0; k < arr2.length; k++) {
          if (arr2[k]=="black"){
            arr1.push(shoeList[i].shoes[j].name);
            arr.push(arr1);
            arr1 = shoeList[i].name;
          }
          
        }
              
      }
   
    }
   return arr;
}

console.log(renderInventory(currentInventory));
