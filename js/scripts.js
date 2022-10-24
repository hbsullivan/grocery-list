function getValues(event) {
  event.preventDefault();
  const foodChoices = document.querySelectorAll("input:checked");   
  const foodChoicesArray = Array.from(foodChoices);
  let selectionValues = [];

  foodChoicesArray.forEach(function(food) {
    selectionValues.push(food.value.toUpperCase());
  })
  selectionValues.sort();
  console.log(selectionValues); 

  selectionValues.forEach(function(food) {
    const paragraph = document.createElement("p");
    paragraph.append(food);
    document.body.append(paragraph);
  });

  form = document.getElementById("grocery-list");
  form.remove();
}


window.addEventListener("load", function() {
  document.querySelector("form#grocery-list").addEventListener("submit", getValues);  
})