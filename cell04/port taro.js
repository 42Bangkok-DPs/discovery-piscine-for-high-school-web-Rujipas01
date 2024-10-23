$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav ul li a').click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
      }, 1000);
    });
  
    // Fade in sections on scroll
    $(window).scroll(function() {
      $('.section').each(function() {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
          $(this).fadeIn(1000);
        }
      });
    });
  
    // Hover effect for projects
    $('.project').hover(
      function() {
        $(this).css('background-color', '#ff6347'); // Change to Tomato on hover
      }, 
      function() {
        $(this).css('background-color', '#ff4500'); // Revert to Orange Red
      }
    );
    
    // Initial hide of sections for fade-in effect
    $('.section').hide();
  });
  