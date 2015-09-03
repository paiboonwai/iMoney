angular.module('imoney.controllers.DashCtrl', ['imoney.ProductService'])
  .controller('DashCtrl',function($scope,ProductService){
  console.log('OuT put Dash');
  $scope.list=[
    {id:1,desc:'ค่าน้ำ',price:'100',icon:'icon ion-android-bar'},
    {id:2,desc:'ค่านม',price:'500',icon:'icon ion-ios-flask'},
    {id:3,desc:'ค่าอาหาร',price:'200',icon:'icon ion-pin'},
    {id:4,desc:'ค่าเจ',price:'700',icon:'icon ion-android-bar'},
    ];

    $scope.users=[];
    ProductService.getUsers()
      .then(function(user){
        console.log(user);
        $scope.users=user;
      },
      function(err){
        console.log(err);
      }) ;

//alert('dddd');
});

