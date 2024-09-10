let inputWeight=document.getElementById('weight');
let inputHeight=document.getElementById('height');


bmiBtn.addEventListener('click',()=>{
    let bmiBtn=document.querySelector('#bmiBtn');
    let result=document.querySelector('#result')
    if(inputWeight.value && inputHeight.value){
      
        let res=document.createElement('h3');
        let node=document.createTextNode(`BMI is `+parseFloat(inputWeight.value/Math.pow(inputHeight.value,2)).toFixed(2));
       console.log(node);
        // console.log(node.toFi);
        // res.innerHTML=node;
        // result.innerHTML=res
        

        
        
    }
    else{
        result.innerHTML='<h3>Please enter height and weight</h3>'
    }
})

