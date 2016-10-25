// Initialize your app
var myApp = new Framework7();

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
    if(!queryForm.email && !queryForm.password){
        
    }
    console.log(JSON.stringify(queryForm));
});
//do get request
$$.get('path-to-file.php', {id: 3}, function (data) {
    console.log(data);
});

//do post request
$$.post('path-to-file.php', {id: 3}, function (data) {
    console.log(data);
});

