/* Target a Element */
let text = document.querySelector("#input");

let btn = document.querySelector(".check");

let output = document.querySelector(".output");

/* checking function */
function checking(){
    /* Fetch input value */
    let inp = text.value;
    /* Convert string to array */
    let input = inp.split('');
    /* Reverse array */
    let revInp = input.reverse();
    /* Convert array to string */
    let revInput = revInp.join('');

    /* Check if given value and reverse value are same or not */
    if(inp == revInput){
        output.innerText = "It is a Palindrome"
    } else {
        output.innerText = "It is NOT a Palindrome"
    }

    /* Check if user doesn't give the any value into the input */
    if(inp.length == 0){
        output.innerText = "Please Enter Input!"
    }
}

/* Add click event listener */
btn.addEventListener("click", checking)