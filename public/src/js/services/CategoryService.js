(function(){
  'use strict';

  angular.module('stuff')
         .service('CategoryService', ['$q','$firebaseObject', 'appConstants', CategoryService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function CategoryService($q, $firebaseObject, appConstants){
    var self = this;
    
    self.rootRef = appConstants.rootRef;
    self.ref = self.rootRef.child('Users')
    self.categories = [
      {
        category: 'adb',
        name: "Collectible Figures"
      },
      {
        category: 'tag_faces',
        name: "Souvenirs"
      },
      {
        category: 'laptop',
        name: 'Computer'
             },
      {
        category: 'photo',
        name: 'Miscellaneous'
              },
      {
        category:"directions_car",
        name: "Vehicle"
              }
    ];



    // Promise-based API
    return {
      loadAllCategories : function() {
        // Simulate async nature of real remote calls
        return $q.when(categories);
      }
    };
  }

})();
