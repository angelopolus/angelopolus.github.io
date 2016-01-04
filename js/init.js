(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.slider').slider({
        full_width: true,
        interval: 3500,
        height: 500,
        transition: 800
    });
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
    $(window).load(function(){
        $('#page-loader').fadeOut(1000);
    });  
      
  }); // end of document ready    
})(jQuery); // end of jQuery name space