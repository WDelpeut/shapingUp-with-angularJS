(function(){
'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

.controller('MyController', function(){
	this.books = books;
	this.genres = genres;
})

.directive('bookGenres', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/book-genres.html',
		scope: {
			genres: '='
		}
	}
})

.directive('bookCover', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/book-cover.html'
	}
})

.directive('reviewForm', function(){
	return {
		restrict: 'E',
		templateUrl: 'views/review-form.html',
		controller: function(){
			this.showForm = false;
			this.book = {genres: {}};

			this.addReview = function(form) {
				books.push(this.book);
				this.book = {genres: {}};

				form.$setPristine();
			}
		},
		controllerAs: 'reviewFormCtrl',
		scope: {
			books: '=',
			genres: '='
		}
	}
});

var genres = ['fable', 'fantasy', 'folkore', 'horror', 'mystery', 'non-fiction'];
var books = [
	{
		title: 'A Game of Thrones: A Song of Ice and Fire',
		author: 'George R.R. Martin',
		isbn: '0553593716',
		cover: 'https://images-na.ssl-images-amazon.com/images/I/51XTk8bvA4L._AC_UL320_SR216,320_.jpg',
		review: 'The most inventive and entertaining fantasy saga of our time-warrants one hell of an introduction. I loved this book!',
		rating: 4,
		genres: { 'fantasy': true, 'mystery': true }
	},
	{
		title: 'The Da Vinci Code',
		author: 'Dan Brown',
		isbn: '0307474278',
		cover: 'https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg',
		review: 'Inspiring and yet completely mind blowing! Best seller of 2010!',
		rating: 4,
		genres: { 'non-fiction': true, 'mystery': false }
	}
];
})();