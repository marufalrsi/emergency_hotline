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
hst.innerHTML+=`<div style="display: flex;align-items: center;justify-content: space-between;background-color: rgb(235, 235, 223);border-radius: 15px;padding:12px;margin-bottom: 10px;"> <div> <p>${NameOfCard}</p> <p>${p_n}</p> </div> <div>${new Date().toLocaleTimeString()} </div> </div>`      
    })
}

        