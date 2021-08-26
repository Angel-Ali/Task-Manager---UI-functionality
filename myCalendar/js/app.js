important = true;

function toggleImportant(){
  console.log("hola!!") 

  if (important) {
    $("iImportant").removeClass("fas").addClass("far");
    important = false;
  } else{
    $("iImportant").removeClass("far").addClass("fas");
    important = true;
  }
}

function taskList(){
 let title = $("#txtTitle").val();
    let important = $("#iImportant").val();
    let due = $("#selDate").val();
    let location = $("#txtLocation").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();
    let taskList = (title, important, due, location, priority, color)
      console.log(taskList);
    

}   





function save() {
    console.log("Saved it!");
 
    // get the value from every control
   
    // HW: finish
  //get all variables here assign them to consrtuctor, pass them on js and console log them. its all in this area and the js a little
    // create a new Task object
    //let task = new Task(something);
    // console log the object 
  
  }
  
function init() {
    console.log("Calendar System");
    console.log(taskList);

$("#iImportant").click(toggleImportant);
$("#btnSave").click(save);

//when user clicks on star
}

window.onload = init;