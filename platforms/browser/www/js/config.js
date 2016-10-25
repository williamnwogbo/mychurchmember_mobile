var CONFIG = (function() {

    var live_version = false;

    var local = {
        'LOGIN_SUBMIT': 'https://mychurchmember.dev/api/auth/login',
    };

    var live = {
        'LOGIN_SUBMIT': 'https://mychurchmember.com/api/auth/login',
    };



    return {
        get: function(name) {
            if(live_version){
                  return live[name];
            }else{
                  return local[name];
            }
        }
    };
})();
