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
