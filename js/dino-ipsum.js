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
