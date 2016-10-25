// Initialize your app
var myApp = new Framework7({
    material: true
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

//handle login action
$$('#submit_login').on('click', function () {
    var queryForm = myApp.formToJSON('#login_form');
    if(!queryForm.email || !queryForm.password){
        myApp.addNotification({
            title: 'Validation Error',
            message: 'Kindly fill in your Email Address or Password'
        });
    }else{
        myApp.showPreloader('logging in');
        // console.log('fdfd');
        $$.post(CONFIG.get('LOGIN_SUBMIT'), queryForm, function (data) {
            console.log(data);
        });

    }

});


