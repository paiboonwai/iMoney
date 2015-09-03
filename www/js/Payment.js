angular.module('imoney.controllers.Payment', [])
  .controller('Payment',function($scope,$ionicLoading,$timeout,$ionicPopup){
  $ionicLoading.show({template: 'loading....'});
  $timeout(function () {
    $scope.items = [
      {id: '1', name: 'ค่านำ้ปะปา', pay: '230'},
      {id: '2', name: 'ค่าหวย', pay: '300'},
      {id: '3', name: 'ค่าขนมปัง', pay: '430'},
    ];
    $ionicLoading.hide();
  }, 3000);
  $scope.popUp = function () {
    $ionicPopup.alert({
      title: 'Alert Popup', template: 'Test....'
    });
  };
});




