function om()
{
  document.getElementById("hom").style.borderBottom="4px solid red ";
}

document.getElementById("hom").addEventListener("mouseout",out);

function out() {
  document.getElementById("hom").style.borderBottom = "";
}

var a = document.getElementById("Services");
a.addEventListener("mouseover",serve);
a.addEventListener("mouseout",serveout);
function serve()
{
   document.getElementById("Services").style.borderBottom="4px solid red ";
}
function serveout()
{
  document.getElementById("Services").style.borderBottom = "";
}

var b = document.getElementById("About");
b.addEventListener("mouseover",abouton);
b.addEventListener("mouseout",aboutoff);
function abouton()
{
    document.getElementById("About").style.borderBottom="4px solid red ";
}
function aboutoff()
{
    document.getElementById("About").style.borderBottom="";
}

var c = document.getElementById("Contact");
c.addEventListener("mouseover",contacton);
c.addEventListener("mouseout",contactoff);

function contacton()
{
   document.getElementById("Contact").style.borderBottom="4px solid red ";
}

function contactoff()
{
   document.getElementById("Contact").style.borderBottom="";
}

window.addEventListener("load", function(){
  typewrite("catchy", "We have Strategy for Serving Things Right.");
  });


  function typewrite (target, text, loop, speed) {

  setTimeout(function() {

  target = document.getElementById(target);
  if (speed === undefined) { speed = 150; }
  if (loop === undefined) { loop = false; }


  let pointer = 0;
  let timer = setInterval(function(){
    pointer++;
    if (pointer <= text.length) {
      target.innerHTML = text.substring(0, pointer);
    } else {
      if (loop) { pointer = 0; }
      else { clearInterval(timer); }
    }
  }, speed);
},1700)
}

var item = document.getElementById("button");
item.addEventListener("mouseover",function(){
  item.style.backgroundColor = "orangered";
})
item.addEventListener("mouseout",function() {
  item.style.backgroundColor = "purple";
})
