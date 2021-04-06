


//Butt.addEventListener('click', function(){
  //  const Butt = Number(document.querySelector('.button').value);
    //const Pay = Number(document.querySelector('.Pay').value);
    //const Day= Number(document.querySelector('.Day').value);
    //const Month= Number(document.querySelector('.Month').value);
    //console.log(Number(let result= Pay *Day *Month));
//
//})

function Calc(){
    const num1= Number(document.querySelector('.Pay').value);
    const num2= Number(document.querySelector('.Day').value);
    const num3 =Number(document.querySelector('.Month').value);

    const result= num1 * num2 * num3;

    const message= document.querySelector('#final');
    message.textContent = result;

}