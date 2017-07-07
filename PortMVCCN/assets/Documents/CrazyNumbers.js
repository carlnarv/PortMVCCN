function validate6() {

    var num1 = parseInt(document.getElementById('firstNumber').value);
    var num2 = parseInt(document.getElementById('secondNumber').value);
    var num3 = parseInt(document.getElementById('thirdNumber').value);
    var num4 = parseInt(document.getElementById('fourthNumber').value);
    var num5 = parseInt(document.getElementById('fifthNumber').value);

    var inputNumArray = [num1, num2, num3, num4, num5];
    var checkNumMin = Math.min.apply(null, inputNumArray);
    var checkNumMax = Math.max.apply(null, inputNumArray);
    if (checkNumMin <= 0 || checkNumMax >= 1000000) {

        alert("Error: You must enter in a number from 1 to 1,000,000!");
        checkNum = "Invalid Input: You must enter a number from 1 to 1,000,000"

        $("#errorMessage1").html(checkNum);

        clearpg4()

    } else {

        var MinNum = Math.min.apply(null, inputNumArray);
        document.getElementById("minResult").innerHTML = "Your minimum number is: " + MinNum;

        var MaxNum = Math.max.apply(null, inputNumArray);
        document.getElementById("maxResult").innerHTML = "Your Maximum number is: " + MaxNum;

        var sumNum = inputNumArray.reduce(function (a, b) { return a + b });
        document.getElementById("sumResult").innerHTML = "Your sum of numbers equals: " + sumNum;

        multiplyBy(inputNumArray);
        meanArray(inputNumArray);
    }

    document.getElementById("numResult").innerHTML = "Your numbers are: " + inputNumArray
}
function multiplyBy4(x) {

    var numArray = x;
    var sum = 1;
    for (i = 0; i < numArray.length; i++) {
        sum *= Number(numArray[i]);

    }
    $("#multResult").html("Your multiplied total is: " + sum.toLocaleString());

}
function meanArray4(x) {
    var numArray = x;
    var sum = 0;
    for (i = 0; i < numArray.length; i++) {
        sum += Number(numArray[i]);
        count = i + 1;
    }
    $("#meanResult").html("Your mean result is " + (sum / count));
}
$("#showCodeCrazyNum4").click(function () {
    $("#hideCodeCrazyNum4").toggle();
});
$('#CrazyNumCl4').click(function () {
    Clear('#form1 span, #form1 input');
});
$('#CrazyNumberSubmit4').click(function () {
    //Gather my data into an array
    var myData = GrabInput('#form1 input');
    if (ValidateInput(myData, 0, 100)) {
        validateCrazyNum()
    }
    else {
        alert('Hey, enter numbers between 0 and 100');
    }
});
function validateCrazyNum4() {
    var msg = "",
        fields = document.getElementById("form1").getElementsByTagName("input");

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == "")
            msg += fields[i].title + ' is required. \n';
    }

    if (msg) {
        alert("please enter a number into the missing field(s)");

        //return false;
    }
    else
        validate4()

}
