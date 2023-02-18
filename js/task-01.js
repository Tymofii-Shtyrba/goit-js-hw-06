
const categoriesRefs = document.querySelectorAll('.item');

console.log(categoriesRefs);

console.log('Number of categories:', categoriesRefs.length);

for (const categoryRef of categoriesRefs) {
  const header = categoryRef.firstElementChild.textContent
  console.log(header);
  console.log('Category:', header);
  const categoryElementsRef = categoryRef.lastElementChild.children
  console.log('Elements:', categoryElementsRef.length);
}

// const categoryCounter = document.querySelectorAll(".item");

// console.log("Number of categories: ", categoryCounter.length);

// categoryCounter.forEach(function (category) {
//   console.log(category);
//   const categoryHeader = category.querySelector("h2");
//   const elementsCounter = category.querySelectorAll("li");
//   console.log("\nCategory: ", categoryHeader.textContent);
//   console.log("Elements: ", elementsCounter.length);
// });