
$(document).ready(function () {

    $('#hideCodeFact,#hideCodeCrazyNum, #hideCodeFizzBuzz, #hideCodeFact, #hideCodePal').hide();

    //var baseUrl = "http://cnarvaez-portfolio.azurewebsites.net";
    var baseUrl = window.location.protocol + "//" + window.location.host + "/"
    
    $.get(baseUrl + "assets/Documents/CrazyNumbers.js", function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#hideCodeCrazyNum").html(html1);
        SyntaxHighlighter.highlight();

    }, 'script');

    $.get(baseUrl + 'assets/Documents/Factorial.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#hideCodeFact").html(html1);
        SyntaxHighlighter.highlight();

    }, 'script');

    $("#showCodeFizzBuzz").click(function () {
        $("#hideCodeFizzBuzz").toggle();
    });

    $('#FormFizzCl').click(function () {
        Clear('#FormFizz input, #FormFizz span');
    });

    $.get(baseUrl + 'assets/Documents/FizzBuzz.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#hideCodeFizzBuzz").html(html1);
        SyntaxHighlighter.highlight();

    }, 'script');

    $('#palCl').click(function () {
        Clear('#formPal input, #formPal span');
    });
   
    $("#showCodePal").click(function () {
        $("#hideCodePal").toggle();
    });
    $.get(baseUrl +  'assets/Documents/Pal.js', function (data) {

        html1 = "<pre class=\"brush: js;\">" + data + "</pre>";

        $("#hideCodePal").html(html1);
        SyntaxHighlighter.highlight();

    }, 'script');

    $('#factCl').click(function () {
        Clear('#formFact input, #formFact span');
    });
    $("#showCodeFact").click(function () {
        $("#hideCodeFact").toggle();
    });

    $("#showCodeCrazyNum").click(function () {
        $("#hideCodeCrazyNum").toggle();
    });
    $('#CrazyNumCl').click(function () {
        Clear('#form1 span, #form1 input');
    });
    $('#CrazyNumberSubmit').click(function () {
        //Gather my data into an array
        var myData = GrabInput('#form1 input');
        if (ValidateInput(myData, 0, 100)) {
            validateCrazyNum()
        }
        else {
            alert('Hey, enter numbers between 0 and 100');
        }
    });

});
var baseUrl = window.location.protocol + "//" + window.location.host + "/"
//CrazyNumbers hover effect
$(function () {
    $('#CrazyNum').hover(function () {
        $('#CrazyNum').attr('src', baseUrl + 'assets/images/JavascriptLogo.jpg');
    },
    function () {
        $('#CrazyNum').attr('src', baseUrl + 'assets/images/crzyNum2.png')
        $('#CrazyNum img').css({ 'width': '300px', 'height': '210px' });

    })
})
//AvShow hover effect
$(function ()
{
    $('#showReady').hover(function ()
    {
        $('#showReady').attr('src', baseUrl + 'assets/images/mobile-app.png');
    },
    function()
    {
        $('#showReady').attr('src', baseUrl + 'assets/images/Show.png');
        $('#showReady img').css({ 'width': '300px', 'height': '210px' });
    })
})

//FizzBuzz hover effect
$(function () {
    $('#FizzBuzzHover').hover(function ()
    {
        $('#FizzBuzzHover').attr('src', baseUrl + 'assets/images/JavascriptLogo.jpg');
    },
    function () {
        $('#FizzBuzzHover').attr('src', baseUrl + 'assets/images/PIC-fizzbuzz.png');
        $('#FizzBuzzHover img').css({ 'width': '300px', 'height': '210px' });
    })
})

//Fact hover effect
$(function () {
    $('#FactHover').hover(function () {
        $('#FactHover').attr('src', baseUrl + 'assets/images/JavascriptLogo.jpg');
    },
    function () {
        $('#FactHover').attr('src', baseUrl + 'assets/images/Factorial.png');
        $('#FactHover img').css({ 'width': '300px', 'height': '210px' });
    })
})
        
//Blog hover effect
$(function () {
    $('#blogHover').hover(function () {
        $('#blogHover').attr('src', baseUrl + 'assets/images/rsz_net.png');
    },
    function () {
        $('#blogHover').attr('src', baseUrl + 'assets/images/Blog.jpg');
        $('#blogHover img').css({ 'width': '300px', 'height': '210px' });
    })
})
//Financial planner hover effect
$(function () {
    $('#finPlHover').hover(function () {
        $('#finPlHover').attr('src', baseUrl + 'assets/images/rsz_net.png');
    },
    function () {
        $('#finPlHover').attr('src', baseUrl + 'assets/images/Money.jpg');
        $('#finPlHover img').css({ 'width': '300px', 'height': '210px' });
    })
})

$(function () {
    $('#carFinHover').hover(function () {
        $('#carFinHover').attr('src', baseUrl + 'assets/images/rsz_net.png');
    },
    function () {
        $('#carFinHover').attr('src', baseUrl + 'assets/images/carfinder.jpg');
        $('#carFinHover img').css({ 'width': '300px', 'height': '210px' });
    })
})
//Pallindrome hover effect
$(function () {
    $('#PalHover').hover(function () {
        $('#PalHover').attr('src', baseUrl + 'assets/images/JavascriptLogo.jpg');
    },
    function () {
        $('#PalHover').attr('src', baseUrl + 'assets/images/Publication1.png');
        $('#PalHover img').css({ 'width': '300px', 'height': '210px' });
    })
})
    
//BugTracker hover effect
$(function () {
    $('#bugTrHover').hover(function () {
        $('#bugTrHover').attr('src', baseUrl + 'assets/images/JavascriptLogo.jpg');
    },
    function () {
        $('#bugTrHover').attr('src', baseUrl + 'assets/images/bugs.png');
        $('#bugTrHover img').css({ 'width': '300px', 'height': '210px' });
    })
})

    //Fizz Buzz Code section ---------------------------
    function results() {
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
        $("#fbResult").html(results);
    }

   
    function validateFb() {
        var msg = "",
            fields = document.getElementById("FormFizz").getElementsByTagName("input");

        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == "")
                msg += fields[i].title + ' is required. \n';
        }

        if (msg) {
            alert("please enter a number into the missing field(s)");

            return false;
        }
        else
            results();

    }
   
    //Palindrome Code section ----------------------------

    function palpgm() {
        var word = $('#Palinput').val();
        var revword = word.split('').reverse().join('');
        results = "";
        var magicWord = " is Not ";
        if (word == revword) {
            magicWord = " is ";
        }
        var results = word + " reversed " + magicWord + " a palindrome";
        $("#output1Pal").html(results);
    }



    function validatePal() {
        var msg = "",
            fields = document.getElementById("formPal").getElementsByTagName("input");

        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == "")
                msg += fields[i].title + ' is required. \n';
        }

        if (msg) {
            alert("Enter in a Word for your results!");

            return false;
        }
        else

            palpgm();

    }

   

    //Factorial Code section ----------------------------

    function fact() {
        var num = $("#factNum1").val()

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
            $('#factResult1').html(factorial);
        }
    }
    function validateFact() {
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
            fact()
    }
  

    //Crazy Numbers Code section ----------------------------
    function validate2() {

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

            clearpg()

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
    function multiplyBy(x) {

        var numArray = x;
        var sum = 1;
        for (i = 0; i < numArray.length; i++) {
            sum *= Number(numArray[i]);

        }
        $("#multResult").html("Your multiplied total is: " + sum.toLocaleString());

    }
    function meanArray(x) {
        var numArray = x;
        var sum = 0;
        for (i = 0; i < numArray.length; i++) {
            sum += Number(numArray[i]);
            count = i + 1;
        }
        $("#meanResult").html("Your mean result is " + (sum / count));
    }
    
    function validateCrazyNum() {
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
            validate2()

    }

   


    //Show Hide Code section ----------------------------













    //Demo Code for Clear btn
    //CustomTools (has no DOM references at all)
    function Clear(selector) {
        $(selector).each(function () {
            $(this).val("");
            $(this).html("");
        });
    }

    function GrabInput(selector) {
        var dataArray = [];
        $(selector).each(function () {
            dataArray.push($(this).val());
        })
        return dataArray;
    }


    //Demo for validating input
    function ValidateInput(dataArray, low, high) {
        var result = true;
        var curNum = 0;
        $.each(dataArray, function (index, value) {
            curNum = Number(dataArray[index]);
            if (curNum < low || curNum > high) {
                result = false;
            }
        });
        return result;
    }

    function validate() {
        var msg = "",
            fields = document.getElementById("form1").getElementsByTagName("input");

        for (var i = 0; i < fields.length; i++) {
            if (fields[i].value == "")
                msg += fields[i].title + ' is required. \n';
        }

        if (msg) {
            alert("please enter a number into the missing field(s)");
            clearpg()
            return false;
        }
        else
            validate2()

    }



