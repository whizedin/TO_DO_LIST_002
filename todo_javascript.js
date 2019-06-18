var array = [];
var count=+1;

function showInput() {

  var item = document.getElementById("myInput").value;
  var item1 = document.getElementById("myInput1").value;
  
  if (!item || !item1) {
    alert("fill the task");
    return false;
  }

  var array_object = {
    id: count,
    title: document.getElementById("myInput").value,
    Description: document.getElementById("myInput1").value,
  };

  count++;
  console.log(array_object);
  console.log(count);

  array.push(array_object);
  console.log(array);
  var text = document.createTextNode(item);
  var newItem = document.createElement("li");
  newItem.appendChild(text);
  document.getElementById("display").appendChild(newItem);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newItem.appendChild(span);
  
span.addEventListener("click",function (e)
{
  e.stopPropagation();
  var close = document.getElementsByClassName("close");
  console.log("First for");
  for (var j = 0; j < close.length; j++) {
    console.log("Inside for");
    close[j].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  console.log("Outside for");
});  

  newItem.onclick= function(){
    
    for(var i = 0;i < array.length ; i++) {
      if (array[i].title === item) {
         idx = i;
         console.log(idx);
         console.log(idx);
          break;
      }
    }
    document.getElementById("display1").innerHTML = array[idx].Description;
  }




    /*console.log(item);
    console.log(i);
    console.log(idx);
    console.log(i);
    console.log(i);
    for(var i = 0;i < array.length ; i++) {
    
    
  });
  

  

 
}


