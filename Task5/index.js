function numArray(){
    const num=[];
    for(let i=0; i<=100;i++){
        num.push(i);
    }
    return num;
}
function sumEven(numArray){
    let sum =0;
   
    for (let i=0; i<numArray.length;i++){ 
        if(numArray[i]%2==0){
        sum+=numArray[i];
    }}
    return sum;
}
function handleButtonClick(){
    const array=numArray();
    const sum=sumEven(array);
    console.log("Sum of even numbers is:" , sum);

}
function attachButtonEvent(){
    const button=document.getElementById("clickBtn")

    if (!button) {
        console.error("Button not found");
        return;
      }
    
      button.addEventListener("click", handleButtonClick);}
      attachButtonEvent();
