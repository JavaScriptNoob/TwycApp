<<<<<<< HEAD
angular.module('myApp').controller('authCtrl', 
								  [	 
								  	'$firebaseAuth', '$location',
								  	iWillRuleOverTheWorld
								  ]);

function iWillRuleOverTheWorld ($firebaseAuth,$location) {
	var someOccupiedCountries = this;
	var auth = $firebaseAuth();

	someOccupiedCountries.login = function(){
	    auth.$signInWithPopup('google');
	};

	someOccupiedCountries.logout = function(){
	    auth.$signOut();
	};
	
	auth.$onAuthStateChanged(function(authData ){
	   someOccupiedCountries.author = authData;
	   //console.log(authData);
	   if (authData) {
		$location.url("/login");
		$scope.$apply(); 
	}
	});

	
	}
=======
angular.module('myApp')
.controller('authCtrl',['$firebaseAuth', iWillRuleOverTheWorld]);
function iWillRuleOverTheWorld ($firebaseAuth){
var someOccupiedCountries =  this;
var auth =$firebaseAuth();
someOccupiedCountries.login = function(){
    auth.$signInWithPopup('google');
};
someOccupiedCountries.logout =function(){
    auth.$signOut();
};
 auth.$onAuthStateChanged(function(authData){
     someOccupiedCountries.author=authData;
   console.log(authData)
    
});}
>>>>>>> authorisation is clear/регистрация закончена











