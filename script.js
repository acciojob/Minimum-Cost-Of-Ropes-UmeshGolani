
function minimumCost() {
    var a = document.getElementById("inputArr");
    var res = 0;
    document.getElementById("result").innerHTML = res;
    var inputArray = document.getElementById("inputArr").value;
    inputArray = inputArray.split(',').map(Number);
    inputArray = inputArray.sort().reverse();
    var a = inputArray.pop();
    for (let i = 1; i < inputArray.length; i++) {
        res += a + inputArray[inputArray.length-i];
        a = res;
        console.log(res);
    }

    
    document.getElementById("result").innerHTML = res;
}

