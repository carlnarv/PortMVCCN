//Fizz Buzz Code section ---------------------------
function results2() {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    var results = "";
    if (Math.round(num1) > 100 || Math.round(num2) > 100) {
        alert("Enter in a number from 1 - 100 please");
        clearpg()
        return false;
    } else
        for (i = 1; i <= 100; i++) {
            if (i % Number(num1) == 0 && i % Number(num2) == 0) {
                results = results + ", FizzBuzz ";
            }
            else if (i % Number(num1) == 0) {
                results = results + " Fizz ";
            }
            else if (i % Number(num2) == 0) {
                results = results + " Buzz ";
            }
            else {
                results = results + i + " ";
            }

        }
    $("#fbResult1").html(results);
}
$("#showCodeFizzBuzz1").click(function () {
    $("#hideCodeFizzBuzz1").toggle();
});
$('#FormFizzCl1').click(function () {
    Clear('#FormFizz1 input, #FormFizz span');
});
function validateFb1() {
    var msg = "",
        fields = document.getElementById("FormFizz1").getElementsByTagName("input");

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == "")
            msg += fields[i].title + ' is required. \n';
    }

    if (msg) {
        alert("please enter a number into the missing field(s)");

        //return false;
    }
    else
        results()

}