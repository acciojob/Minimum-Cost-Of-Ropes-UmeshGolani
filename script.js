
function minimumCost() {
    
    var res = 0;
    var cost = 0;
    document.getElementById("result").innerHTML = res;
    var inputArray = document.getElementById("inputArr").value;
    inputArray = inputArray.split(',').map(Number);
    inputArray = inputArray.sort().reverse();
    var res = inputArray.pop();
    for (let i = 1; i < inputArray.length; i++) {
        
        res += inputArray.pop();
        cost += res;
        inputArray[inputArray.length - i] = res;
        console.log(res);
    }

    
    document.getElementById("result").innerHTML = cost;
}

