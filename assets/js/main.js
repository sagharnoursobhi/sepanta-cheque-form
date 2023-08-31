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








