const categoryName = document.querySelectorAll('h2');
const categoryList = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${categoryName.length}`);

for (let i = 0; i < categoryName.length; i += 1){
    console.log(`Category: ${categoryName[i].outerText}`)
    console.log(`Elements: ${categoryList[i].childElementCount}`);
}