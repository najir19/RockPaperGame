const myDoms=['rock','paper','scissors']
  
const selectByComputer=()=>Math.round(Math.random()*2);

for (let i = 0; i < myDoms.length; i++) {
    const element = myDoms[i];  
    
    const dom=document.querySelector(`#${element}`)
    dom.addEventListener('click',()=>{
        console.log(element,myDoms[selectByComputer()])
    })
}