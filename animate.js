alert("Time to start moving the red box!");

var pos = 0; 
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 10);

var hitwall = false;
function move() {
  if(pos <= 149 && hitwall == false) {
    pos += 1;
    box.style.left = pos+"px";
  }

  if(pos = 149) {
      hitwall = true;
  }

  if(hitwall == true){
    pos -= 1;
    box.style.left = pos+"px";

  }
}
  




    


