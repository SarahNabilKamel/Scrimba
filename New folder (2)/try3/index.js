let phonemsg = document.getElementById('phonemsg')
let pagermsg = document.getElementById('pagermsg')


function add(num)
{
    phonemsg.textContent += num
}

function reset() 
{
    phonemsg.textContent = " "
    
    pagermsg.textContent = " "
}

function send()
{
    pagermsg.textContent = phonemsg.textContent
}