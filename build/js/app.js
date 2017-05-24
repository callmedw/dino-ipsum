(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Dinosaur = function() {
};

Dinosaur.prototype.getIpsum = function(paragraphs, words, displayIpsum) {
  $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + words).then(function(response){
    displayIpsum(response);
  }).fail(function(error){
    $('.output').text("you did something wrong. smart up or you'll go extinct.");
  });
};

exports.dinosaurModule = Dinosaur;

},{}],2:[function(require,module,exports){
var Dinosaur = require('./../js/dino-ipsum.js').dinosaurModule;

var displayIpsum =  function(response){
  $('.output').append(response);
};

$(document).ready(function() {

  $('#dino-button').click(function(){
    var newDino = new Dinosaur();
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    $('#paragraphs').val("");
    $('#words').val("");
    newDino.getIpsum(paragraphs, words, displayIpsum);
  });
});

},{"./../js/dino-ipsum.js":1}]},{},[2]);
