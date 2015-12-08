$(document).ready(function(){
   // make navbar only affix from about me section
 $('#sidebar').affix({
    offset: {
      top: 615
    }
  });

  var $body   = $(document.body);
  var homeHeight = $('#home').outerHeight(true);

  $body.scrollspy({
    target: '#leftCol',
    offset: homeHeight
  });        
});