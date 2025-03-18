function getCourseTemplate(indexCourse){
    return `
        <div class="main-course">
            <div>
                <h3>${assortment[indexCourse].name}</h3>
                <p>${assortment[indexCourse].description}</p>
                <p class="color-orange">${assortment[indexCourse].price.toFixed(2).replace(".", ",")}€</p>
            </div>
            <p class="color-orange add-button">+</p>
        </div>
    `
}