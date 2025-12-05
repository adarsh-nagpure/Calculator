
   function press(a){
    display.value += a;
}
function result(){
    display.value = eval(display.value);
}
function removesingle(){
  display.value=display.value.slice(0,-1)
}
function remove(){
  display.value=""
}