

// to do list/spotify
var taskBox= $('.input');
//console.log (taskBox);
var flower= $('.flower');
var flowerSize= 30;

var itemContainer = $('.tdItems');
var submitButton = $('.submitTask');
var clearButton= $('.clear');
var index=0;
var demo= "demo";
var taskscompleted= $('.taskscompleted');
var numbercompleted= 0;
submitButton.on("click",addTask);

function addTask(event) {
  event.preventDefault(); 
   var input = $('.taskInput').val();
     if (input!='') {
    itemContainer.append(
    `<p id= "${index}" onclick= "strikethrough(${index})" class= "submittedThing">•${input}</p>`
   // `<button class="submittedThing"> ${input}</button>`
    );
  }
  index++;
}

  function strikethrough(num){
    document.getElementById(num).style.textDecoration = "line-through";
    numbercompleted++;
    taskscompleted.text("🌺tasks completed: "+numbercompleted+"🌺");
    flowerSize += 30;
    flower.css ('height', flowerSize+'px');
    }


  



// function deleteCard() {
//   // event.target refers to the element that was clicked on
//   // className checks the class that is on an element
//   // if it was an element with the class of delete...
//   if (event.target.className === "delete") {
//     // event.target refers to the element that was clicked on
//     // parentNode travels up and looks for the direct parent element
//     // then we will remove it's PARENT element, which will be a card
//     event.target.parentNode.remove();
//   }  
// }





