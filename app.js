var myApp = angular.module('myApp',['firebase','ngRoute']);
<<<<<<< HEAD

=======
>>>>>>> authorisation is clear/регистрация закончена
myApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"/home.html",
            controller:'mainController'
        })
        .when("/login",{
            templateUrl:"/login.html",
            controller:"loginCtrl"
        });
});
<<<<<<< HEAD

myApp.controller('mainController',function($scope){

})
myApp.controller('loginCtrl',function($scope){

});
ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}
=======
myApp.controller('mainController',function($scope){

})
>>>>>>> authorisation is clear/регистрация закончена
