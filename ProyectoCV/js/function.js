//document.getElementById("boton").onclick = function () {
  //  console.log("capturamos el evento click")
  //  document.getElementById("demo").innerHTML = "experiencias"
    

//}
//document.addEventListener("click",function){
 //   console.log("hola mundo desde eventlistener");
  //  document.getElementById("demo").innerHTML= "experiencias"
//}
document.getElementById("boton").addEventListener("click",verElemento);
//{
  //  console.log("hola mundodesde eventlistener");
  //  document.getElementById("demo").innerHTML= "experiencias"
//}
function verElemento() {
    var x = document.getElementById("container-experiencias");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }