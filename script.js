/*bouton */
/*timer  */
/*plateau */
// alphabet en tableau
alphabet = ['','a','a','b','c','d','e','e','f','g','h','i','i','j','k','l','m','n','o','o','p','q','r','s','t','u','u','v','w','x','y','z','{','{','}','}','-','-','(','(',')',')'];
alphabetgenerate = [];


$('#button').click(function(){
  $(".carre").each(function lettre() {
  random = Math.ceil(Math.random() * 41);
  alphabet[random];
  alphabetgenerate.push(alphabet[random])
  $(this).children().text(alphabet[random]);
  });

})
console.log(alphabetgenerate);

// on recupere une entrée aléatoire du tableau

/* score */
/* input liste */
