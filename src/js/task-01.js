const categories = document.querySelectorAll(".item");
console.log(`Number of categories:`, categories.length);

categories.forEach(getTitleAndList);

function getTitleAndList(category) {
    const categoryTitle = category.firstElementChild;
    console.log(`Category:`, categoryTitle.textContent);

    const categoryList = categoryTitle.nextElementSibling;
    console.log(`Elements:`, categoryList.childElementCount);
};