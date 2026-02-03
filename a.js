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
        coin=coin-20;
        console.log(coin)
        document.getElementById('coin').innerText=coin;
    })
}
