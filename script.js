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
$('#button').click(function timedText() {
    setTimeout(myTimeout1, 1000);
    setTimeout(myTimeout2, 2000);
    setTimeout(myTimeout3, 3000);
    setTimeout(myTimeout4, 4000);
    setTimeout(myTimeout5, 5000);
    setTimeout(myTimeout6, 6000);
    setTimeout(myTimeout7, 7000);
    setTimeout(myTimeout8, 8000);
    setTimeout(myTimeout9, 9000);
    setTimeout(myTimeout10, 10000);
    setTimeout(myTimeout11, 11000);
    setTimeout(myTimeout12, 12000);
    setTimeout(myTimeout13, 13000);
    setTimeout(myTimeout14, 14000);
    setTimeout(myTimeout15, 15000);
    setTimeout(myTimeout16, 16000);
    setTimeout(myTimeout17, 17000);
    setTimeout(myTimeout18, 18000);
    setTimeout(myTimeout19, 19000);
    setTimeout(myTimeout20, 20000);
    setTimeout(myTimeout21, 21000);
    setTimeout(myTimeout22, 22000);
    setTimeout(myTimeout23, 23000);
    setTimeout(myTimeout24, 24000);
    setTimeout(myTimeout25, 25000);
    setTimeout(myTimeout26, 26000);
    setTimeout(myTimeout27, 27000);
    setTimeout(myTimeout28, 28000);
    setTimeout(myTimeout29, 29000);
    setTimeout(myTimeout30, 30000);
    setTimeout(myTimeout31, 31000);
    setTimeout(myTimeout32, 32000);
    setTimeout(myTimeout33, 33000);
    setTimeout(myTimeout34, 34000);
    setTimeout(myTimeout35, 35000);
    setTimeout(myTimeout36, 36000);
    setTimeout(myTimeout37, 37000);
    setTimeout(myTimeout38, 38000);
    setTimeout(myTimeout39, 39000);
    setTimeout(myTimeout40, 40000);
    setTimeout(myTimeout41, 41000);
    setTimeout(myTimeout42, 42000);
    setTimeout(myTimeout43, 43000);
    setTimeout(myTimeout44, 44000);
    setTimeout(myTimeout45, 45000);
    setTimeout(myTimeout46, 46000);
    setTimeout(myTimeout47, 47000);
    setTimeout(myTimeout48, 48000);
    setTimeout(myTimeout49, 49000);
    setTimeout(myTimeout50, 50000);
    setTimeout(myTimeout51, 51000);
    setTimeout(myTimeout52, 52000);
    setTimeout(myTimeout53, 53000);
    setTimeout(myTimeout54, 54000);
    setTimeout(myTimeout55, 55000);
    setTimeout(myTimeout56, 56000);
    setTimeout(myTimeout57, 57000);
    setTimeout(myTimeout58, 58000);
    setTimeout(myTimeout59, 59000);
    setTimeout(myTimeout60, 60000);
    setTimeout(myTimeout61, 61000);
    setTimeout(myTimeout62, 62000);
    setTimeout(myTimeout63, 63000);
    setTimeout(myTimeout64, 64000);
    setTimeout(myTimeout65, 65000);
    setTimeout(myTimeout66, 66000);
    setTimeout(myTimeout67, 67000);
    setTimeout(myTimeout68, 68000);
    setTimeout(myTimeout69, 69000);
    setTimeout(myTimeout70, 70000);
    setTimeout(myTimeout71, 71000);
    setTimeout(myTimeout72, 72000);
    setTimeout(myTimeout73, 73000);
    setTimeout(myTimeout74, 74000);
    setTimeout(myTimeout75, 75000);
    setTimeout(myTimeout76, 76000);
    setTimeout(myTimeout77, 77000);
    setTimeout(myTimeout78, 78000);
    setTimeout(myTimeout79, 79000);
    setTimeout(myTimeout80, 80000);
    setTimeout(myTimeout81, 81000);
    setTimeout(myTimeout82, 82000);
    setTimeout(myTimeout83, 83000);
    setTimeout(myTimeout84, 84000);
    setTimeout(myTimeout85, 85000);
    setTimeout(myTimeout86, 86000);
    setTimeout(myTimeout87, 87000);
    setTimeout(myTimeout88, 88000);
    setTimeout(myTimeout89, 89000);
    setTimeout(myTimeout90, 90000);
});
function myTimeout1() {
    document.getElementById("timer").innerHTML = "89 secondes";
}
function myTimeout2() {
    document.getElementById("timer").innerHTML = "88 secondes";
}
function myTimeout3() {
    document.getElementById("timer").innerHTML = "87 secondes";
}
function myTimeout4() {
    document.getElementById("timer").innerHTML = "86 secondes";
}
function myTimeout5() {
    document.getElementById("timer").innerHTML = "85 secondes";
}
function myTimeout6() {
    document.getElementById("timer").innerHTML = "84 secondes";
}
function myTimeout7() {
    document.getElementById("timer").innerHTML = "83 secondes";
}
function myTimeout8() {
    document.getElementById("timer").innerHTML = "82 secondes";
}
function myTimeout9() {
    document.getElementById("timer").innerHTML = "81 secondes";
}
function myTimeout10() {
    document.getElementById("timer").innerHTML = "80 secondes";
}
function myTimeout11() {
    document.getElementById("timer").innerHTML = "79 secondes";
}
function myTimeout12() {
    document.getElementById("timer").innerHTML = "78 secondes";
}
function myTimeout13() {
    document.getElementById("timer").innerHTML = "77 secondes";
}
function myTimeout14() {
    document.getElementById("timer").innerHTML = "76 secondes";
}
function myTimeout15() {
    document.getElementById("timer").innerHTML = "75 secondes";
}
function myTimeout16() {
    document.getElementById("timer").innerHTML = "74 secondes";
}
function myTimeout17() {
    document.getElementById("timer").innerHTML = "73 secondes";
}
function myTimeout18() {
    document.getElementById("timer").innerHTML = "72 secondes";
}
function myTimeout19() {
    document.getElementById("timer").innerHTML = "71 secondes";
}
function myTimeout20() {
    document.getElementById("timer").innerHTML = "70 secondes";
}
function myTimeout21() {
    document.getElementById("timer").innerHTML = "69 secondes";
}
function myTimeout22() {
    document.getElementById("timer").innerHTML = "68 secondes";
}
function myTimeout23() {
    document.getElementById("timer").innerHTML = "67 secondes";
}
function myTimeout24() {
    document.getElementById("timer").innerHTML = "66 secondes";
}
function myTimeout25() {
    document.getElementById("timer").innerHTML = "65 secondes";
}
function myTimeout26() {
    document.getElementById("timer").innerHTML = "64 secondes";
}
function myTimeout27() {
    document.getElementById("timer").innerHTML = "63 secondes";
}
function myTimeout28() {
    document.getElementById("timer").innerHTML = "62 secondes";
}
function myTimeout29() {
    document.getElementById("timer").innerHTML = "61 secondes";
}
function myTimeout30() {
    document.getElementById("timer").innerHTML = "60 secondes";
}
function myTimeout31() {
    document.getElementById("timer").innerHTML = "59 secondes";
}
function myTimeout32() {
    document.getElementById("timer").innerHTML = "58 secondes";
}
function myTimeout33() {
    document.getElementById("timer").innerHTML = "57 secondes";
}
function myTimeout34() {
    document.getElementById("timer").innerHTML = "56 secondes";
}
function myTimeout35() {
    document.getElementById("timer").innerHTML = "55 secondes";
}
function myTimeout36() {
    document.getElementById("timer").innerHTML = "54 secondes";
}
function myTimeout37() {
    document.getElementById("timer").innerHTML = "53 secondes";
}
function myTimeout38() {
    document.getElementById("timer").innerHTML = "52 secondes";
}
function myTimeout39() {
    document.getElementById("timer").innerHTML = "51 secondes";
}
function myTimeout40() {
    document.getElementById("timer").innerHTML = "50 secondes";
}
function myTimeout41() {
    document.getElementById("timer").innerHTML = "49 secondes";
}
function myTimeout42() {
    document.getElementById("timer").innerHTML = "48 secondes";
}
function myTimeout43() {
    document.getElementById("timer").innerHTML = "47 secondes";
}
function myTimeout44() {
    document.getElementById("timer").innerHTML = "46 secondes";
}
function myTimeout45() {
    document.getElementById("timer").innerHTML = "45 secondes";
}
function myTimeout46() {
    document.getElementById("timer").innerHTML = "44 secondes";
}
function myTimeout47() {
    document.getElementById("timer").innerHTML = "43 secondes";
}
function myTimeout48() {
    document.getElementById("timer").innerHTML = "42 secondes";
}
function myTimeout49() {
    document.getElementById("timer").innerHTML = "41 secondes";
}
function myTimeout50() {
    document.getElementById("timer").innerHTML = "40 secondes";
}
function myTimeout51() {
    document.getElementById("timer").innerHTML = "39 secondes";
}
function myTimeout52() {
    document.getElementById("timer").innerHTML = "38 secondes";
}
function myTimeout53() {
    document.getElementById("timer").innerHTML = "37 secondes";
}
function myTimeout54() {
    document.getElementById("timer").innerHTML = "36 secondes";
}
function myTimeout55() {
    document.getElementById("timer").innerHTML = "35 secondes";
}
function myTimeout56() {
    document.getElementById("timer").innerHTML = "34 secondes";
}
function myTimeout57() {
    document.getElementById("timer").innerHTML = "33 secondes";
}
function myTimeout58() {
    document.getElementById("timer").innerHTML = "32 secondes";
}
function myTimeout59() {
    document.getElementById("timer").innerHTML = "31 secondes";
}
function myTimeout60() {
    document.getElementById("timer").innerHTML = "30 secondes";
}
function myTimeout61() {
    document.getElementById("timer").innerHTML = "29 secondes";
}
function myTimeout62() {
    document.getElementById("timer").innerHTML = "28 secondes";
}
function myTimeout63() {
    document.getElementById("timer").innerHTML = "27 secondes";
}
function myTimeout64() {
    document.getElementById("timer").innerHTML = "26 secondes";
}
function myTimeout65() {
    document.getElementById("timer").innerHTML = "25 secondes";
}
function myTimeout66() {
    document.getElementById("timer").innerHTML = "24 secondes";
}
function myTimeout67() {
    document.getElementById("timer").innerHTML = "23 secondes";
}
function myTimeout68() {
    document.getElementById("timer").innerHTML = "22 secondes";
}
function myTimeout69() {
    document.getElementById("timer").innerHTML = "21 secondes";
}
function myTimeout70() {
    document.getElementById("timer").innerHTML = "20 secondes";
}
function myTimeout71() {
    document.getElementById("timer").innerHTML = "19 secondes";
}
function myTimeout72() {
    document.getElementById("timer").innerHTML = "18 secondes";
}
function myTimeout73() {
    document.getElementById("timer").innerHTML = "17 secondes";
}
function myTimeout74() {
    document.getElementById("timer").innerHTML = "16 secondes";
}
function myTimeout75() {
    document.getElementById("timer").innerHTML = "15 secondes";
}
function myTimeout76() {
    document.getElementById("timer").innerHTML = "14 secondes";
}
function myTimeout77() {
    document.getElementById("timer").innerHTML = "13 secondes";
}
function myTimeout78() {
    document.getElementById("timer").innerHTML = "12 secondes";
}
function myTimeout79() {
    document.getElementById("timer").innerHTML = "11 secondes";
}
function myTimeout80() {
    document.getElementById("timer").innerHTML = "10 secondes";
}
function myTimeout81() {
    document.getElementById("timer").innerHTML = "9 secondes";
}
function myTimeout82() {
    document.getElementById("timer").innerHTML = "8 secondes";
}
function myTimeout83() {
    document.getElementById("timer").innerHTML = "7 secondes";
}
function myTimeout84() {
    document.getElementById("timer").innerHTML = "6 secondes";
}
function myTimeout85() {
    document.getElementById("timer").innerHTML = "5 secondes";
}
function myTimeout86() {
    document.getElementById("timer").innerHTML = "4 secondes";
}
function myTimeout87() {
    document.getElementById("timer").innerHTML = "3 secondes";
}
function myTimeout88() {
    document.getElementById("timer").innerHTML = "2 secondes";
}
function myTimeout89() {
    document.getElementById("timer").innerHTML = "1 secondes";
}
function myTimeout90() {
    document.getElementById("timer").innerHTML = "0 secondes";
};
})
// on recupere une entrée aléatoire du tableau

/* score */
/* input liste */
