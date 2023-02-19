
const categoriesRefs = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesRefs.length);

for (const categoryRef of categoriesRefs) {
  const header = categoryRef.firstElementChild.textContent
  console.log('Category:', header);
  const categoryElementsRef = categoryRef.lastElementChild.children
  console.log('Elements:', categoryElementsRef.length);
}