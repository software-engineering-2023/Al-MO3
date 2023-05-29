
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).find('i').removeClass('zmdi-eye');
            $(this).find('i').addClass('zmdi-eye-off');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).find('i').addClass('zmdi-eye');
            $(this).find('i').removeClass('zmdi-eye-off');
            showPass = 0;
        }
        
    });


})(jQuery);
const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
// Add an event listener for the click event
loginButton.addEventListener('click', function() {
    event.preventDefault()
    const emailValue = emailInput.value;
                        const passwordValue = passwordInput.value;
  // Navigate to the desired HTML page
    if (emailValue === 'user@gmail.com' && passwordValue === 'beso' ) {
      window.location.href = 'homeuser.html';
    } else if (emailValue ==='admin@gmail.com'  && passwordValue === 'beso' ) {
      window.location.href = 'homeadmin.html';}
    else if (emailValue ==='banker@gmail.com'  && passwordValue === 'beso'){
        window.location.href = 'homebanker.html';}
    

});
const button2 = document.getElementById('loginButtonBanker');

// Add an event listener for the click event
button2.addEventListener('click', function() {
  // Navigate to the desired HTML page
  window.location.href = 'homebanker.html';
});
const button3 = document.getElementById('loginButtonAdmin');

// Add an event listener for the click event
button3.addEventListener('click', function() {
  // Navigate to the desired HTML page
  window.location.href = 'homeadmin.html';
});