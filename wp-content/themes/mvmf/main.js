jQuery(document).ready(function($){ 
  // prevent faux anchors
  $('a.noclick').click(function (e) {
    e.preventDefault();
  });
});
