/*plateau */
// alphabet en tableau
alphabet = ['','a','a','b','c','d','e','e','f','g','h','i','i','j','k','l','m','n','o','o','p','q','r','s','t','u','u','v','w','x','y','z','{','{','}','}','-','-','(','(',')',')'];
alphabetgenerate = [];
var timeoutID;

$(document).ready(function() {
$('#button').click(function(){
  $(this).attr('disabled', 'true');
  timeoutID = window.setTimeout(showAlert, 90000);
  $(".carre").each(function lettre() {
  random = Math.ceil(Math.random() * 41);
  alphabet[random];
  alphabetgenerate.push(alphabet[random]);
  $(this).children().text(alphabet[random]);
  });
    console.log(alphabetgenerate);
})

/*bouton */
function showAlert(){
$(document).ready(function() {
  alert('Partie terminé');
  alphabetgenerate.length = 0;
  console.log(alphabetgenerate);
  $('#button').removeAttr('disabled');
});
};


/*timer  */
$('#button').click(function() {
  var myVar = setInterval(myTimer ,1000);
  var d = 90;
function myTimer() {
  if (d <= 90 && d > 0){
  console.log(myTimer)
  d--;
console.log(d)
$('#timer').text(d + ' secondes');
}else if (d== 0){
  return false
}
}

})
})
// on recupere une entrée aléatoire du tableau

/* score */
/* input liste */
