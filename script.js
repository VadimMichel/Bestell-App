function init(){
    renderCourse();
    
}

function renderCourse(){
    let courseContentRef = document.getElementById("courseContent");
    courseContentRef.innerHTML = "";

    for (let indexCourse = 0; indexCourse < assortment.length; indexCourse++) {
        courseContentRef.innerHTML += getCourseTemplate(indexCourse);
    }
}

function renderCourseInBusked(){
    let buskedCourseContentRef = document.getElementById("busketCourseContent");
    buskedCourseContentRef.innerHTML = "";
   
    
    for (let buskedIndex = 0; buskedIndex < assortment.length; buskedIndex++) {
        if(assortment[buskedIndex].busked > 0){
        buskedCourseContentRef.innerHTML += getBuskedCourseTemplate(buskedIndex);
        }
    }
    calcResult();
}

function changeBuskedAmount(indexCourse, amount){

    assortment[indexCourse].busked = assortment[indexCourse].busked + amount;
    renderCourseInBusked(indexCourse);
}

function deleteCouse(indexCourse){
    assortment[indexCourse].busked = 0;
    renderCourseInBusked(indexCourse);
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
    }
}

function closeWindow(){
    document.getElementById('overlay').classList.add("d_none");
}

function insideBox(event){
    event.stopPropagation();
}

function rateOrder(amount, classe, event){
    for (let indexRateOrder = 0; indexRateOrder < amount; indexRateOrder++) {
        
        document.getElementById(`star${indexRateOrder+1}`).innerHTML = `<img class="star" src="./assets/icons/star${classe}.png" alt="star-empty">`
    }
    event.stopPropagation();
}

function submitOrder(){
    document.getElementById('overlay').classList.remove("d_none");
    for (let indexClear = 0; indexClear < assortment.length; indexClear++) {
        assortment[indexClear].busked = 0;
    }
    renderCourseInBusked();
}