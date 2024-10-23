// jQuery to change background color of text on hover
$(document).ready(function(){
    $("#omg-text").hover(
        function() {
            $(this).css("color", "#28a745");  // Change text color to green on hover
        }, function() {
            $(this).css("color", "#ff5733");  // Change text color back to orange when mouse leaves
        }
    );
    
    // Animate the images when the page loads
    $("#image1, #image2").hide().fadeIn(2000);  // Fade-in animation for images
    
    // Add click interaction to images to enlarge them using pure JavaScript
    document.querySelectorAll('.image-container img').forEach(img => {
        img.addEventListener('click', function() {
            if (this.style.width === '400px') {
                this.style.width = '200px';  // Shrink back if already large
            } else {
                this.style.width = '400px';  // Enlarge image on click
            }
        });
    });
});