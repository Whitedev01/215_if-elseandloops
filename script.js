var wrapperEle = document.body.querySelector(".wrapper");
var animals = ["dog","fish","cat","shark","cat","dog"];

for(var i = 0; i<animals.lenght; i++){
  writeElement(animals[i]);
}
function writeElement(list){
  var ele =document.createElement("div");
  if(list==="dog"){
    ele.innerHTML="borf borf";
  }else if(list==="fish"){
    ele.innerHTML="I'm an animal";
  }else if(list==="cat"){
    ele.innerHTML="I am a cat";
  }else if(list==="shark"){
    ele.innerHTML="I'm an amimal";
  }
  wrapperEle.appendChild(ele);
}