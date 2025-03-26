function getCourseTemplate(indexCourse, array){
    return `
        <div class="main-course">
            <div>
                <h3>${array[indexCourse].name}</h3>
                <p>${array[indexCourse].description}</p>
                <p class="color-orange">${array[indexCourse].price.toFixed(2).replace(".", ",")}€</p>
            </div>
            <p onclick="changeBuskedAmount(${indexCourse}, ${+1}, ${array})" class="color-orange add-button">+</p>
        </div>
    `
}

function getBuskedCourseTemplate(buskedIndex, array){
    return `
        <div id="courseContent${buskedIndex}">
            <h3>${array[buskedIndex].name}</h3>
            <div class="busked-course-container">
                <span onclick="changeBuskedAmount(${buskedIndex}, ${-1}, ${array})" class="bold-orange-hover">-</span>
                <span id="busketCourseAmountContent">${array[buskedIndex].busked}x</span>
                <span onclick="changeBuskedAmount(${buskedIndex}, ${+1}, ${array})" class="bold-orange-hover">+</span>
                <span id="busketCoursePriceContent">${(array[buskedIndex].price * array[buskedIndex].busked).toFixed(2).replace(".", ",")}€</span>
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