const inputNumber = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const resultDiv = document.getElementById("output");

const convertToRoman = () =>{
  let arab = parseInt(inputNumber.value);
  const arabic = 
      [1000, 900, 500, 400, 100, 
       90, 50, 40, 10, 9, 5, 4, 1];
  const roman = 
      ['M', 'CM', 'D', 'CD', 'C', 
       'XC', 'L', 'XL', 'X', 'IX', 
       'V', 'IV', 'I'];
  
       let result = '';

  for (let i = 0; i < arabic.length; i++) {
      while (arab >= arabic[i]) {
          result += roman[i];
          arab -= arabic[i];
      }
  }
  resultDiv.innerHTML=`<span class="number-result">${result}</span>`;
}

const checkInput = () => {
  if (
    !inputNumber.value
  ) {
    console.log("inside the if");
    resultDiv.innerHTML = "Please enter a valid number";
  } else if (
    inputNumber.value===-1 || inputNumber.value <= 0
  ){
    resultDiv.innerHTML = `<span class="invalid-input">Please enter a number greater than or equal to 1</span>`;
  } else if (
    inputNumber.value >=4000
  ){
    resultDiv.innerHTML = `<span class="invalid-input">Please enter a number less than or equal to 3999</span>`;
  } else {
  convertToRoman();
  }
}

convertButton.addEventListener("click", checkInput);

inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkInput();
  }
});
