function FizzBuzz() {
  

    //Grab the necessary data

    //Vanilla JS first
    //var num1 = document.getElementById("fbnum1").value;
    //var num2 = document.getElementById("fbnum2").value;

    //Using jQuery
    var num1 = $('#fbnum1').val();
    var num2 = $('#fbnum2').val();

    //alert("Number 1 is: " + num1 + " Number 2 is: " + num2);
    var output = '';
    for (var loop = 1; loop <= 100; loop++)
    {
        output +=  loop + ',';
    }

    //Vanilla JS
    document.getElementById("output").innerHTML = output;

}

function CopyMeJS() {
    //1. Go get my data
    var num = document.getElementById("input1").value;

    //2. Manipulate the data (if necessary)
    //num = Number(num);

    //3. Put data somewhere
    document.getElementById("output1").value = num;
}

function CopyMeJS2() {
    //1. Go get my data
    var num = document.getElementById("input1").value;

    //2. Manipulate the data (if necessary)
    //num = Number(num);

    //3. Put data somewhere
    document.getElementById("output2").innerHTML = num;
}

function CalcMax() {
    var num1 = document.getElementById("r2input1").value;
    var num2 = document.getElementById("r2input2").value;
    var num3 = document.getElementById("r2input3").value;

    document.getElementById("r2output1").innerHTML = Math.max(num1, num2, num3);
}

function Add1() {
    var num1 = document.getElementById("r2input1").value;
    var num2 = document.getElementById("r2input2").value;
    var num3 = document.getElementById("r2input3").value;

    document.getElementById("r2output2").innerHTML = num1 + num2 + num3;
}

function Add2() {
    var num1 = document.getElementById("r2input1").value;
    var num2 = document.getElementById("r2input2").value;
    var num3 = document.getElementById("r2input3").value;

    document.getElementById("r2output3").innerHTML = Number(num1) + Number(num2) + Number(num3);
}

function Add3() {
    var num1 = document.getElementById("r2input1").value;
    var num2 = document.getElementById("r2input2").value;
    var num3 = document.getElementById("r2input3").value;

    document.getElementById("r2output4").innerHTML = +num1 + +num2 + +num3;
}

function ReverseMe()
{
    //1. Get some data

    //2. Do something with it if necessary

    //3. Put the result somewhere
}

function TargetAllDivP() {
    $("#test p").hide();
}

function TargetTopLevelP() {
    $("#test > p").hide();
}

function TargetAllDivP2() {
    $("#test >> p").hide();
}

function GetSet1() {
    var inputArray = [];
    $('#Div1 input').each(function () {
        inputArray.push($(this).val());
    });
    $('#output').html(inputArray.toString());

}

function GetSet2() {
    var inputArray = [];
    $('#Div2 input').each(function () {
        inputArray.push($(this).val());
    });
    $('#output').html(inputArray.toString());
}

$('#btn2').click(function() {
    GetSet2();
});

$('#btn3').click(function () {
    var inputArray = [];
    $('#Div2 input').each(function () {
        inputArray.push($(this).val());
    });
    NewCalcMax(inputArray[0], inputArray[1], inputArray[2]);
});

$('#btn4').click(function () {
    var inputArray = [];
    $('#Div2 input').each(function () {
        inputArray.push($(this).val());
    });
    NewCalcMax2(inputArray);
});

function NewCalcMax(num1, num2, num3) {
    var result = Math.max(num1, num2, num3);
    $('#output2').html("The Max is: " + result);
}

function NewCalcMax2(array) {
    //var result = Math.max(null, array);
    var result = Math.max.apply(null, array);
    $('#output3').html("The Max is: " + result);
}

$('#btn5').click(function () {
    var total = 0;
    $('#Div2 input').each(function () {
        total += Number($(this).val());
    });
    $('#output4').html("The Sum is: " + total);
});

$('#btn6').click(function () {
    var total = 0, loop = 0;
    $('#Div2 input').each(function () {
        total += Number($(this).val());
        loop++;
    });
    $('#output5').html("The Avg is: " + total / loop);
});






