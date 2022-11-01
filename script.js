let text = document.querySelector("#input");

let btn = document.querySelector(".check");

let output = document.querySelector(".output");

function checking(){
    let inp = text.value;
    let input = inp.split('');
    let revInp = input.reverse();
    let revInput = revInp.join('');

    if(inp == revInput){
        output.innerText = "It is a Palindrome"
    } else {
        output.innerText = "It is NOT a Palindrome"
    }

    if(inp.length == 0){
        output.innerText = "Please Enter Input!"
    }
}

btn.addEventListener("click", checking)