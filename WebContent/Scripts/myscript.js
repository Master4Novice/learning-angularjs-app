///<reference path="angular-1.6.4/angular.min.js" />
///<reference path="angular-1.6.4/angular-animate.js" />
///<reference path="angular-bootstrap/ui-bootstrap-tpls-2.5.0.js" />

var myApp = angular.module("myModule",[]);
myApp.controller("myController",function($scope)
{
	var employee = {
			fName:'Abhinav',
			lName:'Dwivedi',
			gender:'Male'
	};
	
	$scope.employee=employee;
});

var myIndex = angular.module("myIndex",["ui.bootstrap"]).controller("myIndexController",function($scope)
		{  var indexValues = [
			{indexTopic:'One',indexHtmlName:'One.html',hit:0,dateHit: new Date("November 19, 1990"), numberIn:50.01},
			{indexTopic:'Two',indexHtmlName:'Two.html',hit:0,dateHit: new Date("November 30, 1991"), numberIn:51.10},
			{indexTopic:'Three',indexHtmlName:'Three.html',hit:0,dateHit: new Date("May 4, 1984"), numberIn:52.22},
			{indexTopic:'Two way DataBinding',indexHtmlName:'Four.html',hit:0,dateHit: new Date("May 10, 1980"), numberIn:53.63},
			{indexTopic:'Color Change',indexHtmlName:'Five.html',hit:0,dateHit: new Date("February 4, 2012"), numberIn:54.0091},
			{indexTopic:'Repeat',indexHtmlName:'Six.html',hit:0,dateHit: new Date("February 5, 2017"), numberIn:55.005},	
			{indexTopic:'Custom Filter',indexHtmlName:'Seven.html',hit:0,dateHit: new Date("May 4, 2017"), numberIn:56.076}	,
			{indexTopic:'Form',indexHtmlName:'Form.html',hit:0,dateHit: new Date("May 8, 2017"), numberIn:57.071},
			{indexTopic:'Shopping List',indexHtmlName:'myShopping.html',hit:0,dateHit: new Date("May 8, 2017"), numberIn:58.056},
			{indexTopic:'Custom Services',indexHtmlName:'myCustomService.html',hit:0,dateHit: new Date("May 8, 2017"), numberIn:59.056}	
		]
			$scope.indexValues = indexValues;
		
		    $scope.hitIncrease = function(indexValue){
		    	indexValue.hit++;
		    }
		    
		    $scope.hitDecrease = function(indexValue){
		    	indexValue.hit--;
		    }
		    
		    $scope.rowLimit=2;
		    $scope.sortColumn = "indexTopic";
		    $scope.reverseSort=false;
		    $scope.myOrderSelect = function(indexValue){
		    	
		    	$scope.reverseSort = ($scope.sortColumn==indexValue) ? !$scope.reverseSort : false;
		    	$scope.sortColumn=indexValue;
		    	
		    }
		    
		    $scope.getSortClass = function(indexValue){

		    	if($scope.sortColumn==indexValue){
		    		
		    		return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
		    	}
		    	return '';
		    }
});

var myAppFilter = angular.module("myAppModule",[]).controller("myFilterController",function($scope)
		{
	         var employees = [
	        	 {name:'Mikky',gender:1,city:'Mc-Donald'},
	        	 {name:'Minni',gender:1,city:'California'},
	        	 {name:'Dale',gender:2,city:'California'},
	        	 {name:'Chip',gender:2,city:'Russia'},
	        	 {name:'Donald Duck',gender:3,city:'China'}        	 
	         ]
	         
	         $scope.employees = employees;
		});
var appShopping = angular.module("myShoppingList", []).controller("myShoppingCtrl",function($scope)
		{
	       $scope.products = ["Milk","Bread","Cheese"];
	       $scope.addItem = function(){
	    	   if(!$scope.addMe){
	    		   return;
	    	   }
	    	   if($scope.products.indexOf($scope.addMe)==-1){
	    		   $scope.products.push($scope.addMe);
	    	   }else{
	    		   $scope.errortext = "The item is already in your shopping list.";
	    	   }
	    	   
	       }
	       $scope.removeItem = function(x){
	    	   $scope.errortext = "";
	    	   $scope.products.splice(x,1);
	       }
		});
var myCustomApp = angular
				  .module("myCustomModule",[])
				  .controller("myCustomCtrl",function($scope,stringService){
					  $scope.transformString = function(input){ 
						  $scope.output = stringService.processString(input);
					  }
				  })