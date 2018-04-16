var app = angular.module('scotchTodo', []);

app.controller('mainController', function($scope){
    $scope.fromData = {};
    $scope.name = 'shin';
/*
    $http.get('/api/todos')
        .success(function(data){
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data){
            console.log('Error' + data);
        });
    

    $scope.createTodo = function(){
        $http.post('/api/todos', $scope.fromData)
            .success(function(data){
                $scope.fromData = {};
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data){
                console.log('Error :' + data);
            });
    };

    $scope.deleteTodo = function(id){
        $http.delete('/api/todos/' + id)
            .success(function(data){
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data){
                console.log('Error : ' + data);
            });
    };
*/
});