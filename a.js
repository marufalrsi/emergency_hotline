let loves = document.querySelectorAll('.love');
let counter = parseInt(document.getElementById('l_n').innerText)
for(let lov of loves){
    let clk = false;
lov.addEventListener("click",function()
{
    if (clk) return;
    counter++;
    document.getElementById('l_n').innerText=counter;
    clk=true
})
}
let calls = document.querySelectorAll('.call')
let coin  = parseInt(document.getElementById('coin').innerText)
for(let call of calls){
    call.addEventListener("click",function(){
        if(coin === 0){
            alert("not sufficient Ballance!");
            return;
        }
        let card = call.parentNode.parentNode.parentNode
        let NameOfCard=card.querySelector('.name').innerText
        let p_n=card.querySelector('.Phone_number').innerText
        alert("calling to:"+NameOfCard +"\n"+p_n)
        coin=coin-20;
        document.getElementById('coin').innerText=coin;
        let hst = document.getElementById('history');
hst.innerHTML+=`<div style="display: flex;align-items: center;justify-content: space-between;background-color: rgb(235, 235, 223);border-radius: 15px;padding:12px;margin-bottom: 15px;margin-top: 15px;"> <div> <p class="inter" style="font-size: 18px">${NameOfCard}</p> <p>${p_n}</p> </div> <div>${new Date().toLocaleTimeString()} </div> </div>` 
console.log(document.getElementById('history').innerHTML)     
    })
}
document.getElementById('clr').addEventListener("click",function(){
    console.log('clr');
    console.log(document.getElementById('history').innerHTML)
document.getElementById('history').innerHTML=``})
let cps = document.getElementsByClassName('copy')
for(let cp of cps){
    cp.addEventListener("click",function(){
       alert("copied phone number")
      let card = cp.parentNode.parentNode.parentNode
      let copy = card.querySelector('.Phone_number').innerText
      navigator.clipboard.writeText(copy)
    })
   
}
        