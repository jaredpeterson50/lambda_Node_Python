async function pythonMult2(){
    var text1Val = document.getElementById("textBoxPython").value
    const response = await fetch('https://udglzwzr7j.execute-api.us-west-1.amazonaws.com/dev?param1=' + text1Val);
    const myText = await response.text();
    alert("value mulitplied by 2 is: " + myText);
    //console.log(myText);
    //api python https://udglzwzr7j.execute-api.us-west-1.amazonaws.com/dev
}
async function nodeJSMult2(){
    const text1Val = document.getElementById("textBoxNodeJS").value
    const response = await fetch('https://ftu803a911.execute-api.us-west-1.amazonaws.com/dev?param1=' + text1Val);
    const myText = await response.text();
    alert("value mulitplied by 2 is: " + myText);
    //console.log(myText);
    //api nodejs lambda https://ftu803a911.execute-api.us-west-1.amazonaws.com/dev
}



