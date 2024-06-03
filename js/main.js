//output
function Result(){
    Display.value=eval(Display.value);
    
}


//Handling with Digits
function Digits(num){
    let DisplayTxt=Display.value;
    if (DisplayTxt.startsWith('0.')) {
        Display.value+=num;
    }else if(DisplayTxt.startsWith('0')){
        Display.value=num;
    } else {
        Display.value+=num;
    }
    
}
// Dot Handling
function Dot(){
    let DisplayTxt=Display.value;
    if(DisplayTxt== ""){
        Display.value="0."
    }else if(DisplayTxt.endsWith('.')){
        Display.value+=""
    }
    else{
        Display.value+="."
    }


}
  //Zero Handling  
function Zero(){
    let DisplayTxt=Display.value;
    if (DisplayTxt.startsWith('0')){
        Display.value='';
    } else{
        Display.value+='0';
    }
}


 //operation Handling
 function Operators(op){
    let DisplayTxt=Display.value;
    if(DisplayTxt.endsWith("+")||DisplayTxt.endsWith("-")||DisplayTxt.endsWith("*")||DisplayTxt.endsWith("/")){
        Display.value+="";
    }else{
        
        Display.value+=op
    }
 }



 //All clear
function AllClear(){
    
    let DisplayTxt=Display.value;
    Display.value='';
}

// Clear
function Clear(){
    let currentvalue= document.getElementById('Display').value;
    document.getElementById('Display').value=currentvalue.slice(0,-1);
    
 
}