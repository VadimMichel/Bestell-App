function getCourseTemplate(indexCourse){
    return `
        <div onclick="renderCourseInBusked(${indexCourse})" class="main-course">
            <div>
                <h3>${assortment[indexCourse].name}</h3>
                <p>${assortment[indexCourse].description}</p>
                <p class="color-orange">${assortment[indexCourse].price.toFixed(2).replace(".", ",")}€</p>
            </div>
            <p class="color-orange add-button">+</p>
        </div>
    `
}

function getBuskedCourseTemplate(indexCourse){
    return `
        <div id="courseContent${indexCourse}">
            <h3>${assortment[indexCourse].name}</h3>
            <div class="busked-course-container">
                <span class="bold-orange-hover">-</span>
                <span id="busketCourseAmountContent">${assortment[indexCourse].busked}x</span>
                <span class="bold-orange-hover">+</span>
                <span id="busketCoursePriceContent">${assortment[0].price * assortment[indexCourse].busked}€</span>
                <div class="trash-image-container"><img src="./assets/icons/trash.png" alt="Mülleimer"></div>
            </div>
        </div>
    `
}