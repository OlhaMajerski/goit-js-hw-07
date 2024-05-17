const categories = document.querySelectorAll('ul li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    // Extract category name
    const categoryName = category.querySelector('h2').textContent;
    // Count elements within the category
    const categoryElements = category.querySelectorAll('li').length;
    // Log category name and element count
    console.log(`Category: ${categoryName} \nElements: ${categoryElements}`);
  });
  