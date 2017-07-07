function fact7() {
    var num = $("#factNum17").val()

    if (num <= 0 || num >= 151) {
        alert("Enter in a number from 1 - 150 please!");
        return false;
    }
    else {
        var i, factorial;
        factorial = 1;
        for (i = 1; i <= num; i++) {
            factorial = factorial * i;
        }
        $('#factResult17').html(factorial);
    }
}
function validateFact7() {
    var msg = "",
        fields = document.getElementById("formFact").getElementsByTagName("input");

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == "")
            msg += fields[i].title + ' is required. \n';
    }

    if (msg) {
        alert("please enter a number into the missing field(s)");

        return false;
    }
    else
        fact7()
}
$('#factCl').click(function () {
    Clear('#formFact input, #formFact span');
});
$("#showCodeFact").click(function () {
    $("#hideCodeFact").toggle();
});
