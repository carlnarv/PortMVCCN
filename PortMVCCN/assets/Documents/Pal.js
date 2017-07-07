//Palindrome Code section ----------------------------

function palpgm1() {
    var word = $('#Palinput1').val();
    var revword = word.split('').reverse().join('');
    results = "";
    var magicWord = " is Not ";
    if (word == revword) {
        magicWord = " is ";
    }
    var results = word + " reversed " + magicWord + " a palindrome1";
    $("#output1Pal1").html(results);
}
function validatePal1() {
    var msg = "",
        fields = document.getElementById("formPal1").getElementsByTagName("input");

    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == "")
            msg += fields[i].title + ' is required. \n';
    }

    if (msg) {
        alert("Enter in a Word for your results!");

        return false;
    }
    else
        palpgm1()

}
$('#palCl1').click(function () {
    Clear('#formPal input, #formPal span');
});
$("#Palinput1").on('keyup', function (e) {
    if (e.keyCode == 13) {
        validatePal();  // Do something
    }
});
$("#showCodePal1").click(function () {
    $("#hideCodePal").toggle();
});