$(document).ready(() => {

    var user = true,
        email = true,
        phone = true,
        organization = true,
        commers = true,
        national = true;




        // Functions 
        function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


    function isNumeric(data) {

        var tester = data.match(/[a-zA-Z]/gi);

        return tester;

    } 


    function isChar(data) {
        var testChar = data.match(/[0-9]/gi);

        return testChar; 

    }


    $('.uncheck').click(function(e) {

        e.preventDefault();

                $('input[type="radio"]').each(function() {

                        $(this).prop('checked',false);
                    
                });

    });










        // Hide and Show Sections 
//    $('#registerStat').on('change' , function() {
//        if($(this).val() == 'Visitor') {
//            $('.visitor').show();
//            $('.entitty').hide();
//
//            $('input[name="username"]').attr('placeholder' , 'Name');
//
//        } else {
//            $('.visitor').hide();
//            $('.entitty').show();
//
//
//            $('input[name="username"]').attr('placeholder' , 'Contact Person');
//
//
//        }
//    });
//

//    $('#education').on('change' , function() {
//
//        if($(this).val() == 'Graduate') {
//                $('.graduate').show();
//                $('.undergraduate').hide();
//
//
//        } else {
//                $('.undergraduate').show();
//                $('.graduate').hide();
//
//        }
//
//    });
//

    





    // Form Validation
    

    // Add Astrict 
    $('input[class="form-control"]').each(function() {


        if($(this).attr('name') === 'emp') {
            
        } else {
            $(this).after('<span class="astrict">*</span>');

        }
        
    });

    


    $('select').each(function() {

            $(this).after('<span class="astrict select-box">*</span>');

    });


    // Form Validation For Every Input
    
        $('input[name="username"]').blur(function() {


            
            if($(this).val().length <= 0) {

                user = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Name Can\'t Be Empty');
                $(this).parent().find('.custom-alert').fadeIn(200);
                

            } else if(isChar($(this).val()) != null) {

                user = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Name Accept Only Charctars');
                $(this).parent().find('.custom-alert').fadeIn(200);



            } else if(($(this).val().match(/[ ]/gi) || []).length < 2) {
                         user = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('You Should Provide Three Names');
                $(this).parent().find('.custom-alert').fadeIn(200);


                


            } else {
                user = false;
                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
                $(this).parent().find('.custom-alert').fadeOut(200);

            }

        });
        
        $('input[name="email"]').blur(function() {

            var emailVal = $(this).val();
            if($(this).val().length == 0) {

                email = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Email Can\'t be empty');
                $(this).parent().find('.custom-alert').fadeIn(200);
                

            } else if(!validateEmail(emailVal)) {
                email = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Insert A Valid Email');
                $(this).parent().find('.custom-alert').fadeIn(200);


            } else {
                email = false;
                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
                $(this).parent().find('.custom-alert').fadeOut(200);
                
            }

        });
        
        $('input[name="phone"]').blur(function() {

            var phoneValid = $(this).val();

            if($(this).val().length == 0 || $(this).val().length > 11 || $(this).val().length < 11) {

                phone = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Phone Accept Only 11 Numbers');
                $(this).parent().find('.custom-alert').fadeIn(200);
                

            } else if (isNumeric(phoneValid) != null){
                phone = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Phone Accept Only Numbers');
                $(this).parent().find('.custom-alert').fadeIn(200);



            } else {
                phone = false;
                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
                $(this).parent().find('.custom-alert').fadeOut(200);
            }

        });

//          $('input[name="univ"]').blur(function() {
//
//            if($(this).val().length < 1) {
//
//                univ = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//                
//
//            } else if(isChar($(this).val()) != null) {
//
//                univ = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('University Accept Only Charctars');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//
//
//
//            } else {
//                univ = false;
//                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
//                $(this).parent().find('.custom-alert').fadeOut(200);
//            }
//
//        });
//
//
//          $('input[name="faculty"]').blur(function() {
//
//            if($(this).val().length < 1) {
//
//                faculty = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//                
//
//            } else if(isChar($(this).val()) != null) {
//                faculty = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Faculty Accept Only Charctars');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//
//
//            } else {
//                faculty = false;
//                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
//                $(this).parent().find('.custom-alert').fadeOut(200);
//            }
//
//        });
//
//
//          $('input[name="dep"]').blur(function() {
//
//            if($(this).val().length < 1) {
//
//                dep = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//                
//
//            } else if(isChar($(this).val()) != null) {
//                dep = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Department Accept Only Charctars');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//
//
//            } else {
//                dep = false;
//                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
//                $(this).parent().find('.custom-alert').fadeOut(200);
//            }
//
//        });
//
//          $('input[name="exp"]').blur(function() {
//
//            if($(this).val().length < 1) {
//
//                exp = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//                
//
//            } else if(isNumeric($(this).val()) != null) {
//                exp = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Experience Accept Only Numbers');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//
//
//            } else {
//                exp = false;
//                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
//                $(this).parent().find('.custom-alert').fadeOut(200);
//            }
//
//        });
//
//
//
//        
//          $('input[name="gradYear"]').blur(function() {
//
//            if($(this).val().length < 4) {
//
//                gradYear = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Grad. Year Can\'t Be Empty');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//                
//
//            } else if($(this).val() > 2017) {
//                   gradYear = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Grad. Can\'t Be More than 2017');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//                
//            } else if(isNumeric($(this).val()) != null) {
//                gradYear = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Grad. Year Accept Only Numbers');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//
//
//            } else {
//                gradYear = false;
//                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
//                $(this).parent().find('.custom-alert').fadeOut(200);
//            }
//
//        });
//
//
//        
//          $('input[name="expecGrad"]').blur(function() {
//
//            if($(this).val().length < 1) {
//
//                expecGrad = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Expected Grad. Can\'t Be Empty');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//                
//
//            } else if ($(this).val() < 2017 ) {
//                expecGrad = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Expected Grad. Can\'t Be Less Than 2018');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//
//
//
//            } else if(isNumeric($(this).val()) != null) {
//                  expecGrad = true;
//                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
//                $(this).parent().find('.custom-alert').text('Expected Grad. Year Accept Only Numbers');
//                $(this).parent().find('.custom-alert').fadeIn(200);
//
//
//
//
//            } else {
//                expecGrad = false;
//                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
//                $(this).parent().find('.custom-alert').fadeOut(200);
//            }
//
//        });
//
//     



        
          $('input[name="organization"]').blur(function() {

            if($(this).val().length < 1) {

                organization = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').fadeIn(200);
                

            } else {
                organization = false;
                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
                $(this).parent().find('.custom-alert').fadeOut(200);
            }

        });

        
          $('input[name="commers"]').blur(function() {

            if($(this).val().length < 1) {

                commers = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Commers Can\'t be Less Than 1')
                .parent().find('.custom-alert').fadeIn(200);
                

            } else if($(this).val() > 50) {
                 commers = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Commers Can\'t be More Than 50');
                $(this).parent().find('.custom-alert').fadeIn(200);

            } else if(isNumeric($(this).val()) != null) {
                 commers = true;
                $(this).css('border' , '1px solid rgb(231 , 76 , 60)');
                $(this).parent().find('.custom-alert').text('Commers Accept Only Numbers');
                $(this).parent().find('.custom-alert').fadeIn(200);


            }
            else {
                commers = false;
                $(this).css('border' , '1px solid rgb(42 , 242 , 100)');
                $(this).parent().find('.custom-alert').fadeOut(200);
            }

        });






        $('.submit-btn').click(function(event) {




            if ($('#registerStat').val() == 'Entitty') {
            if(user == true || email == true || phone == true || organization == true || commers == true) {

                event.preventDefault();



                $('input[name="username"] , input[name="email"] , input[name="phone"],input[name="organization"] ,input[name="commers"],input[name="national"]').blur();

            }


        } 


        });










    

});


