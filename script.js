function init(){
    renderCourse(assortment, "courseContent");
    renderCourse(sideDish, "courseContentSideDish");
    renderCourse(drinks, "courseContentDrinks");
}

function renderCourse(array, id){
    let courseContentRef = document.getElementById(id);
    courseContentRef.innerHTML = "";

    for (let indexCourse = 0; indexCourse < array.length; indexCourse++) {
        courseContentRef.innerHTML += getCourseTemplate(indexCourse, array);
    }
}

function renderCourseInBusked(array){
    let buskedCourseContentRef = document.getElementById("busketCourseContent");
    buskedCourseContentRef.innerHTML = "";
   
    for (let buskedIndex = 0; buskedIndex < array.length; buskedIndex++) {
        if(array[buskedIndex].busked > 0){
        buskedCourseContentRef.innerHTML += getBuskedCourseTemplate(buskedIndex, array);
        }
    }
    calcResult();
}

function changeBuskedAmount(indexCourse, amount, array){
    array[indexCourse].busked = array[indexCourse].busked + amount;
    renderCourseInBusked(array);
}

function deleteCouse(indexCourse){
    assortment[indexCourse].busked = 0;
    renderCourseInBusked();
}

function calcResult(){
        let result = 0;
        let calcResultContent = document.getElementById("calcResultContent");
        calcResultContent.innerHTML = "";

    for (let indexCalcResul = 0; indexCalcResul < assortment.length; indexCalcResul++) {
        result += assortment[indexCalcResul].price * assortment[indexCalcResul].busked;

        if(result != 0){
        calcResultContent.innerHTML = getCalcResultTemplate(result);
        }
        renderBuskedButtonAmount(result);
    }
}

function renderBuskedButtonAmount(result){
    let buskedAmountRef = document.getElementById("buskedAmount");
    buskedAmountRef.innerHTML = "";
    
    if(result != 0){
    buskedAmountRef.innerHTML = `(${(result + 5).toFixed(2).replace(".", ",")}€)`
    }
    else{
        buskedAmountRef.innerHTML = ""; 
    }
}

function closeWindow(){
    document.getElementById('overlay').classList.add("d_none_allways");
}

function insideBox(event){
    event.stopPropagation();
}

function toggleResponsiveBusked(){
    toggleDnone("buttonTop");
    toggleDnone("buttonBottum");
    toggleDnone("busketStickyRail");
    toggleDnone("contentRestaurant");
}

function toggleDnone(id){
    document.getElementById(id).classList.toggle("d_none_responsive");
}

function rateOrder(amount, classe, event){
    for (let indexRateOrder = 0; indexRateOrder < amount; indexRateOrder++) {
        document.getElementById(`star${indexRateOrder+1}`).innerHTML = `<div><img class="star" src="./assets/icons/star${classe}.png" alt="star-empty"></div>`
    }
    event.stopPropagation();
}

function submitOrder(){
    document.getElementById('overlay').classList.remove("d_none_allways");
    for (let indexClear = 0; indexClear < assortment.length; indexClear++) {
        assortment[indexClear].busked = 0;
    }
    renderCourseInBusked();
}

function calcRating(indexRateOrder){
    raitings.stars += raitings.stars + indexRateOrder;
    ratingArray.raitings += 1;
}