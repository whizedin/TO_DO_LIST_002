var array=[];
var list_display = document.getElementById('display'); 
var display_description = document.getElementById('display1');
function showDescription(){
  display_description.innerHTML='';
  var index = this.getAttribute('data_id');
  console.log(index);
  var disp_task = document.createElement('p');
  var disp_desp = document.createElement('p');

  disp_desp.innerHTML="";

  disp_task.innerHTML='Task   :'+array[index-1].title;
  disp_desp.innerHTML='Despription:'+array[index-1].description;


  var div1 = document.createElement('div');
  div1.className="task";
  //var head = document.createElement('p');
  //head.innerHTML='Task:';

  var div2 = document.createElement('div');
  div2.className="dis";
 // var head1 = document.createElement('p');
 // head1.innerHTML = 'Description:';

 // disp_task.appendChild(head);
  div1.appendChild(disp_task);
  
  //head.appendChild(head1);
  div2.appendChild(disp_desp);
  display_description.appendChild(div1);
  display_description.appendChild(div2);
}


function Delete_task(event){
  event.stopPropagation();
  index=this.value;
  console.log(index);
  array.splice((index-1),1);
  console.log(array);
  render();
  }
function render(){
  display_description.innerHTML='';
  list_display.innerHTML='';
  for( i=0;i<array.length;i++){
    var list_element = document.createElement('li');
    list_element.id="list-id"+i;
    list_element.setAttribute('data_id',(i+1));
    list_element.onclick=showDescription;

  //button
    var del_button=document.createElement('button');
    del_button.id='button-id'+(i+1);
    del_button.value=i+1;
    del_button.innerHTML = '&#215';
    del_button.onclick=Delete_task;

  //header
    var header = document.createElement('h4');
    header.innerHTML = array[i].title;

    var header1 = document.createElement('h6');
    header1.innerHTML = array[i].description;


    list_element.appendChild(header);
    list_element.appendChild(header1);
    list_element.appendChild(del_button);
    list_display.appendChild(list_element);

  }

  
}

function AddElinput(){
  var task=document.getElementById("input_task").value;
  var description=document.getElementById("input_description").value;
  if(!task || !description)
  {
    alert("Fill all the mandatory fields");
    return;
  }
  object={
    title: task ,
    description: description
  };
  array.push(object);
  console.log(array);
  display_description.innerHTML='';
  console.log(array.length)
  render();
    //list
}
