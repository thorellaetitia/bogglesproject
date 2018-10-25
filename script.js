/*bouton*/
/*timer */
/*plateau*/
var tableau = ['GITHUB','MKDIR','RM','ADD','GIT','COMMIT','MERGE','CHECKOUT','BRANCH','MASTER','ORIGIN','PUSH','PULL','CLONE','REPOSITORY',
'HTML','IMG','SCRIPT','BODY','HEAD','DIV','SPAN','STRONG','BOLD','BR','FONT','META','STYLE','TABLE','TITLE','LINK','CLASS','ID','URL','FOOTER','HEADER','BUTTON','FORM','INPUT','SECTION','HREF','SRC','TYPE','VALUE','CAROUSEL','HTTP','CSS','ANIMATION','COLOR','BACKGROUND','DISPLAY','NONE','BLOCK','FLEX','PADDING','MARGIN','HEIGHT','WIDTH','TOP','BOTTOM','LEFT','RIGHT','BORDER','FIXED','BLACK','WHITE','RED','GREEN','YELLOW','BLUE','PINK','GREY','ORANGE','BROWN','PURPLE','SIZE','PYTHON','PHP','JQUERY','JAVA','JAVASCRIPT','JAVAEE','WORDPRESS','BOOTSTRAP','CONTAINER','ROW','MAIN','COL','MEDIA','CARD','RESPONSIVE','NAV','NAVBAR','TEXT','ROUNDED','DROPDOWN','FLUID','BORDERLESS','DARK','LIGHT','WARNING','DANGER','SUCESS','PRIMARY','SECONDARY','ALERT','BADGE','ITEM','DRUPAL','ANGULARJS','SCOPE','FUNCTION','NUMBER','FILTER','AJAX','SQL','MYSQL','ORACLE','JSP','VAR','XML','FLASH','NODEJS','ASP','ANOUSONE','CMS','JOOMLA','MAGENTA','LAURA','ROBIN','LUC','YASSINE','PRESTASHOP','RUBY','SASS','LESS','CDN','PARALLAX']
  $('input').keypress(function(event){
  var keyCode = event.keyCode && event.which;
  var valeur = $('#input').val();
  if(keyCode == '13') {
    //Si la le mot rentrer dans l'input correspond à une valeur du tableau ...//
    if(valeur===tableau.indexOf()){
      $('#list').text(valeur);
    } else {
      $('#alert').show();
    };
  };
});
/*score*/
/*input liste */
