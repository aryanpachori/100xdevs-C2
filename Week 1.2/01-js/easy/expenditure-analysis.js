/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

let map = new Map();
transactions.forEach((obj) => {
  map.set(obj.category,(map.get(obj.category)|| 0)+ obj.price)
});
 
return  Array.from(map,([x,y])=>({
  category: x,
  totalSpent: y,
}));
}
module.exports = calculateTotalSpentByCategory;
