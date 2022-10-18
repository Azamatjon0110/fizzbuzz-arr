
var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".form-control");
var elFizzContent = document.querySelector(".fizz-value");
var elBuzzContent = document.querySelector(".buzz-value");
var elFizzbuzzContent = document.querySelector(".fizzbuzz-value");
var alertText = document.querySelector(".alert")
var fizzArray = [];
var buzzArray = [];
var fizbuzzArray = [];

var alertRemoveClass = function(){
  alertText.classList.add("d-none");
  alertText.classList.remove("d-block");
}

var alertAddClass = function(){
  alertText.classList.remove("d-none");
  alertText.classList.add("d-block");
}

alertRemoveClass();
elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  var inputValue = Number(elInput.value.trim());

  if(inputValue % 3 == 0 && inputValue % 5 == 0 && inputValue != 0 ){
    fizbuzzArray.unshift(inputValue);
    fizzArray.unshift(inputValue);
    buzzArray.unshift(inputValue);
    elFizzbuzzContent.textContent = fizbuzzArray.join(", ");
    elFizzContent.textContent =fizzArray.join(", ");
    elBuzzContent.textContent = buzzArray.join(", ");
    console.log(fizbuzzArray);
    alertRemoveClass();
  }else if (inputValue % 3 == 0 && inputValue != 0){
    fizzArray.unshift(inputValue);
    elFizzContent.textContent =fizzArray.join(", ");
    console.log(fizzArray);
    alertRemoveClass();
  }else if (inputValue % 5 == 0 && inputValue != 0){
    buzzArray.unshift(inputValue);
    elBuzzContent.textContent = buzzArray.join(", ");
    console.log(buzzArray);
    alertRemoveClass();
  }else{
    alertText.textContent = `${inputValue} 3ga ham 5ga ham bo'linmaydi`;
    alertAddClass();
  }

  elInput.value = "";
});