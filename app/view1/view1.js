'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
	.filter('poktype', function() {
		return function(items, type) { 
			console.log(items);
			console.log(type);
			var arr = [];
			if (!type) {
				return items;
			}
			if (Array.isArray(items)) {
				items.forEach(function(item) {
					
					item.type.forEach(function(itm){
						
						if(itm == type) {
							arr.push(item);
						}
					});
				});
				return arr;
			}
			
	};
})

    .controller('View1Ctrl', function ($scope, $filter) {
        $scope.pokemons = [{
            "abilities": [
                "Overgrow"
            ],
            "detailPageURL": "/us/pokedex/bulbasaur",
            "weight": 15.2,
            "weakness": [
                "Fire",
                "Flying",
                "Ice",
                "Psychic"
            ],
            "height": 28,
            "collectibles_slug": "bulbasaur",
            "featured": "true",
            "id": "1",
            "name": "Bulbasaur",
            "ThumbnailAltText": "Bulbasaur",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
            "slug": "bulbasaur",
            "type": [
                "grass",
                "poison"
            ]
        }, {
            "abilities": [
                "Blaze"
            ],
            "detailPageURL": "/us/pokedex/charmander",
            "weight": 18.7,
            "weakness": [
                "Ground",
                "Rock",
                "Water"
            ],
            "height": 24,
            "collectibles_slug": "charmander",
            "featured": "true",
            "id": "4",
            "name": "Charmander",
            "ThumbnailAltText": "Charmander",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
            "slug": "charmander",
            "type": [
                "fire"
            ]
        }, {
            "abilities": [
                "Torrent"
            ],
            "detailPageURL": "/us/pokedex/squirtle",
            "weight": 19.8,
            "weakness": [
                "Electric",
                "Grass"
            ],
            "height": 20,
            "collectibles_slug": "squirtle",
            "featured": "true",
            "id": "7",
            "name": "Squirtle",
            "ThumbnailAltText": "Squirtle",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
            "slug": "squirtle",
            "type": [
                "water"
            ]
        }, {
            "abilities": [
                "Static"
            ],
            "detailPageURL": "/us/pokedex/pikachu",
            "weight": 13.2,
            "weakness": [
                "Ground"
            ],
            "height": 16,
            "collectibles_slug": "pikachu",
            "featured": "true",
            "id": "025",
            "name": "Pikachu",
            "ThumbnailAltText": "Pikachu",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
            "slug": "pikachu",
            "type": [
                "electric"
            ]
        }, {
            "abilities": [
                "Adaptability",
                "Run Away"
            ],
            "detailPageURL": "/us/pokedex/eevee",
            "weight": 14.3,
            "weakness": [
                "Fighting"
            ],
            "height": 12,
            "collectibles_slug": "eevee",
            "featured": "true",
            "id": "133",
            "name": "Eevee",
            "ThumbnailAltText": "Eevee",
            "ThumbnailImage": "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/133.png",
            "slug": "eevee",
            "type": [
                "normal"
            ]
        }];

        $scope.showName = function(id) {
            $scope.pokemons.forEach(function(item, ind) {
                if ( item.id == id) {
                    alert(item.name);
                }
            })
        }
		$scope.sortRevers = false;
		$scope.pockemonOpt = [
			{name: 'id', title: 'ID', dir:false, id: 0},
			{name: 'weight', title: 'Вес', dir:false, id: 1},
			{name: 'height', title: 'Рост', dir:false, id: 2},
			{name: 'name', title: 'Имя', dir:false, id: 3},
			{name: 'weight', title: 'Вес по убыванию', dir:true, id: 4}
		];
		$scope.myOrderProperty = $scope.pockemonOpt[0];
		$scope.sortOpt = 'id';
		$scope.direction = function(){
			$scope.sortOpt = $scope.myOrderProperty.name;
			$scope.sortRevers = $scope.myOrderProperty.dir;
			
		}
		 $scope.pokemons2 = $scope.pokemons;
    
    $scope.$watch('type', function(val)
    { 
        $scope.pokemons = $filter('poktype')($scope.pokemons2, val);
    });

    });