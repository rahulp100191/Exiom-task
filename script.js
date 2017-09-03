// toggle class scroll
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar-trans').addClass('afterscroll');
        } else {
            $('.navbar-trans').removeClass('afterscroll');
        }
    });
    var dNow = new Date();
    var localdate = (dNow.getMonth() + 1) + '/' + dNow.getDate() + '/' + dNow.getFullYear() + ' ' + dNow.getHours() + ':' + dNow.getMinutes();
    $('#currentDate').text(localdate);
    //check for small and medium devices
    checkWidth(true);
    $(window).resize(function() {
    checkWidth(false);
    });
    //Currency textbox value change

    $("#numConverter").on("change", function() {
        amount = $(this).val();
    });
    //currency selection from the dropdown
    $('.bfh-selectbox').on('change.bfhselectbox', function() {
        var dataPrice = $(this).val();
        console.log(dataPrice);
        alert(dataPrice);
        console.log($('#numConverter').val());
    });

    //Money.js plugin for currency converter
    fx.base = "EUR";
    fx.settings = {
        from: "EUR"
    };

    var amount = $('#numConverter').val();
    // Load exchange rates data via the cross-domain/AJAX proxy:
    $.getJSON(
        'http://api.fixer.io/latest',
        function(data) {
            // Check money.js has finished loading:
            if (typeof fx !== "undefined" && fx.rates) {
                fx.rates = data.rates;
                fx.base = data.base;
            } else {
                // If not, apply to fxSetup global:
                var fxSetup = {
                    rates: data.rates,
                    base: data.base
                }
            }

            // now that we have exchange rates, add a few to our page
            var USD = fx.convert(amount, {
                to: "USD"
            }); //13.22784197768393
            var GBP = fx.convert(amount, {
                to: "GBP"
            }); //8.567532636985659
            var JPY = fx.convert(amount, {
                to: "JPY"
            }); //1028.1670562349989

            // we can now use the accounting.js library to format the numbers properly
            /*   USD = accounting.formatMoney(USD, "$ ", 2, ",", ".");
               GBP = accounting.formatMoney(GBP, "£ ", 2, ",", ".");
               JPY = accounting.formatMoney(JPY, "¥ ", 2, ",", ".");*/
            $('#conValue').val(USD);
            $("ul.currencies").append("<li>USD estimate: " + USD + "</li>");
            $("ul.currencies").append("<li>GBP estimate: " + GBP + "</li>");
            $("ul.currencies").append("<li>JPY estimate: " + JPY + "</li>");
        }
    );
});

function checkWidth(init) {
    /*If browser resized, check width again */
    if ($(window).width() < 514) {
        $('#dig').addClass('menu');
        $('#news').addClass('news');
        $('#img').addClass('img');
        $('#flexMenu').addClass('menu');
        $('#navv').removeClass('hidden-xs');
        $('#flex').removeClass('flex-container');
        $('#navv').removeClass('navbar-fixed-top');
        $('#dig').removeClass('digie');
        $('#cTable').removeClass('cTable');
        $('#curr').removeClass('curren');
        $('#services').removeClass('currency');

        $('#conHead').removeClass('containerHeader');
    } else {
        if (!init) {

            $('#dig').removeClass('menu');
            $('#flexMenu').removeClass('menu');
            $('#news').removeClass('news');
            $('#img').removeClass('img');
        }
    }
}