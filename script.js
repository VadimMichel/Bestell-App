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