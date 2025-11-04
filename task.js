const task = document.querySelector('#text');
document.querySelector('#push').onclick = function(){
 if(task.value.length == 0){
 alert("Please Enter A Task");

 }
 else{
  document.querySelector('.tasks').style.display = "block";
  document.querySelector('.tasks').innerHTML += ` <div class="added">
           
  <span id="tname">
  ${task.value}
  </span>
  <button class="del">X</button> </div> `
  var curtask = document.querySelectorAll(".del");
for(var i=0; i<curtask.length; i++){
curtask[i].onclick = function(){
  this.parentNode.remove();
}
}
 }
 var tasks = document.querySelectorAll(".tasks");
for(var i=0; i<tasks.length; i++){
  tasks[i].onclick = function(){
    this.classList.toggle('completed');
  }
}
task.value ="";
}