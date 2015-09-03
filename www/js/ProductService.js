angular.module('imoney.ProductService',[])
  .factory('ProductService',function($q,$http){
    var products=[
      {id:1,name:'aaaaa'},
      {id:2,name:'bbbbb'},
      {id:3,name:'ccccc'},
    ]
    return{
      getProduct:function(){
        return products;
      },
      getUsers:function(){
        var q=$q.defer();
        $http({
          url:'http://jsonplaceholder.typicode.com/users',
          //url:'http://localhost:3000/json',
        })
          .success(function(data){
            q.resolve(data);
          })
          .error(function(data,status){
            q.reject('Connection error'+status)
          });
        return q.promise;
      }
    }
  });
