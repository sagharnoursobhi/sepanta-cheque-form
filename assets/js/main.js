/*
    تاریخ مقرر شده برای برگشت ضمانت نامه :
    clicking on radio butto to display guaranteeReturnDate div
*/

let positiveRadioButton = document.getElementById('flexRadioPositive');
let negativeRadioButton = document.getElementById('flexRadioNegative');
let guaranteeReturnDate = document.getElementById('guaranteeReturnDate');

negativeRadioButton.addEventListener('click',()=>{
    

    if(positiveRadioButton.checked){
        guaranteeReturnDate.classList.add("d-none");
        guaranteeReturnDate.classList.remove("d-block");
        
    }else if(negativeRadioButton.checked){
        guaranteeReturnDate.classList.remove("d-none");
        guaranteeReturnDate.classList.add("d-block");
        
        
    }
})

positiveRadioButton.addEventListener('click',()=>{
    
    

    if(positiveRadioButton.checked){
        guaranteeReturnDate.classList.add("d-none");
        guaranteeReturnDate.classList.remove("d-block");
        
    }else if(negativeRadioButton.checked){
        guaranteeReturnDate.classList.add("d-block");
        guaranteeReturnDate.classList.remove("d-none");
        
        
    }
})

/**
JalaliDatePicker */

jalaliDatepicker.startWatch();


/**
submit handler */

const projectName = document.querySelector('#name');
const startDate = document.querySelector('#start');
const endDate = document.querySelector('#end');
const bankName = document.querySelector('#bank');
const guaranteeType = document.querySelector('#bail');
const chequeNumber = document.querySelector('#cheque');
const returnDate = document.querySelector('#return-date');
const explaination = document.querySelector('#note');


let result = {
    project: '',
    startDate: '',
    endDate: '',
    bankName: '',
    guaranteeType: '',
    chequeNumber: '',
    guaranteeReturnDate: '',
    explaination: ''
};

document.querySelector('#form').addEventListener('submit', (e)=>{
    e.preventDefault();

    result = {
        id: Math.floor(Math.random()),
        project: projectName.value,
        startDate: startDate.value,
        endDate: endDate.value,
        bankName: bankName.value,
        guaranteeType: guaranteeType.value,
        chequeNumber: chequeNumber.value,
        returnDate: returnDate.value,
        explaination: explaination.value
    }

    try {
        fetch('http://jsonplaceholder.typicode.come/todos', {
            method: 'POST',
            body: JSON.stringify(result),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json()).then(json => console.log(json));
    } catch (error) {
        console.log(error);
    }
    
    result = {
        project: '',
        startDate: '',
        endDate: '',
        bankName: '',
        guaranteeType: '',
        chequeNumber: '',
        guaranteeReturnDate: '',
        explaination: ''
    };
})








