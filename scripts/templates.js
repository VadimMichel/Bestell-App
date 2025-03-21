function getCourseTemplate(indexCourse){
    return `
        <div onclick="changeBuskedAmount(${indexCourse}, ${+1})" class="main-course">
            <div>
                <h3>${assortment[indexCourse].name}</h3>
                <p>${assortment[indexCourse].description}</p>
                <p class="color-orange">${assortment[indexCourse].price.toFixed(2).replace(".", ",")}€</p>
            </div>
            <p class="color-orange add-button">+</p>
        </div>
    `
}

function getBuskedCourseTemplate(buskedIndex){
    return `
        <div id="courseContent${buskedIndex}">
            <h3>${assortment[buskedIndex].name}</h3>
            <div class="busked-course-container">
                <span onclick="changeBuskedAmount(${buskedIndex}, ${-1})" class="bold-orange-hover">-</span>
                <span id="busketCourseAmountContent">${assortment[buskedIndex].busked}x</span>
                <span onclick="changeBuskedAmount(${buskedIndex}, ${+1})" class="bold-orange-hover">+</span>
                <span id="busketCoursePriceContent">${(assortment[buskedIndex].price * assortment[buskedIndex].busked).toFixed(2).replace(".", ",")}€</span>
                <div onclick="deleteCouse(${buskedIndex})" class="trash-image-container"><img src="./assets/icons/trash.png" alt="Mülleimer"></div>
            </div>
        </div>
    `
}

function getCalcResultTemplate(result){
    return `
        <table>
            <tr>
                <td>Zwischensumme</td>
                <td>${result.toFixed(2).replace(".", ",")}€</td>
            </tr>
            <tr>
                <td>Lieferkosten</td>
                <td>5,00€</td>
            </tr>
            <tr>
                <td class="f-w-bold">Gesammt</td>
                <td class="f-w-bold">${(result + 5).toFixed(2).replace(".", ",")}€</td>
            </tr>
        </table>
        <div onclick="submitOrder()" class="d-flex-j-center"><button class="btn">Bezahlen (${(result + 5).toFixed(2).replace(".", ",")}€)</button></div>
    `
}