angular.module('imoney.openwebCtrl',[])

  .controller('openwebCtrl', function($cordovaInAppBrowser) {

  var options = {
    location: 'yes',
    clearcache: 'yes',
    toolbar: 'no'
  };

  document.addEventListener(function () {
    $cordovaInAppBrowser.open('http://ngcordova.com', '_blank', options)
      .then(function(event) {
        console.log('success');// success
      })
      .catch(function(event) {
        console.log('error');// error
      });


    $cordovaInAppBrowser.close();

  }, false);

  $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert CSS via code / file
    $cordovaInAppBrowser.insertCSS({
      code: 'body {background-color:blue;}'
    });

    // insert Javascript via code / file
    $cordovaInAppBrowser.executeScript({
      file: 'script.js'
    });
  });

  $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){

  });

  $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){

  });

});
