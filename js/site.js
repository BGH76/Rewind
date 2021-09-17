
function getValues() {
    let userStr = document.getElementById("userString").value;
    let revString = [];
    for(let i = userStr.length-1; i >= 0; i--){
        revString += userStr[i];
    }
    document.getElementById("msg").innerHTML = `Your string in reverse is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}