$(function(){
  //génération d'un nbre aléatoire
  randomNumber = Math.floor(Math.random()*100);
  tryCount = 0;
  $('#play').click(function(){
    userNumber = $('#test').val();
    tryCount++;
    if (isNaN(userNumber) || userNumber<0 || userNumber>100 || userNumber=='') {
      message = 'entrez un nbre entre 0 et 100';
    }else {
      if (userNumber == randomNumber) {
        message = 'correct ' + tryCount;
      }else if (userNumber > randomNumber) {
        message = 'moins';
      }else {
        message = 'plus';
      }
    }
    alert(message);
  });
});
