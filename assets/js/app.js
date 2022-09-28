let cl = console.log;

// ##### Dom selection Declrations ####### 
const showModalBtn = document.getElementById('showModal');
const backDrop = document.getElementById('backDrop');
const myModal = document.getElementById('myModal');
const myClose = Array.from(document.querySelectorAll('.myClose'))



// ######## callBack Functions #####

// function expression 
// showModalHandler === undefined 
const showModalHandler = function(){
    backDrop.classList.remove('d-none');
    myModal.classList.remove('d-none');
}

const hideModalHandler = function(){
    backDrop.classList.add('d-none');
    myModal.classList.add('d-none');
}
// qa | uat 


// ######## Event Binding #######

showModalBtn.addEventListener('click' , showModalHandler);
backDrop.addEventListener('click', hideModalHandler)
myClose.forEach(function(ele){
    // cl(ele);
    ele.addEventListener('click', hideModalHandler )
})











// function declaration 



