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

function renderCourseInBusked(indexCourse){
    let buskedCourseContentRef = document.getElementById("busketCourseContent");
    let courseInBuskedContentRef = document.getElementById(`courseContent${indexCourse}`)

    if(assortment[indexCourse].busked == 0){
    assortment[indexCourse].busked += 1;
    buskedCourseContentRef.innerHTML += getBuskedCourseTemplate(indexCourse);
    }else{
    assortment[indexCourse].busked += 1;
    courseInBuskedContentRef.innerHTML = getBuskedCourseTemplate(indexCourse);
    }
}