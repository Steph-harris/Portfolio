$(document).ready(function(){
   // make navbar only affix from about me section
   debugger
 $('#sidebar').affix({
    offset: {
      top: 615
    }
  });

  var $body   = $(document.body);
  var homeHeight = $('#home').outerHeight(true) + 10;

  $body.scrollspy({
    target: '#leftCol',
    offset: homeHeight
  });        
});