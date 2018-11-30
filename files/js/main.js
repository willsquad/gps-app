$(document).ready(function(){
    $(document).on('click', '.overlay_button', function(){
        var self = $(this);
        var project = self.attr('data-project');
        $('#'+project+'_1').click();
    });

    $(document).on('click', '.img_overlay', function(){
        var self = $(this);
        var overlay_button = $(this).find('.overlay_button');
        var project = overlay_button.attr('data-project');
        $('#'+project+'_1').click();
    });

    /* lightbox.option({
        //'fitImagesInViewport':false
    }); */

    /* $('.projects_row').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.project_image_container'
    }); */

    $(document).on('click', '.tech_stack_heading', function(){
        var self = $(this);
        self.closest('.tech_stack').find('.tech_stack_tags').slideToggle();
        self.find('svg').toggleClass('fa-chevron-down fa-chevron-up');
    });


    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
});