# Travel Photo Gallery

**Technology: HTML, CSS, Bootstrap, JQuery, AJAX, JSON, Apache Web Server.** <br>

**Built a photo gallery for travel photo sharing website using JQuery and AJAX to create mousemove, mouseleave, mouseenter handlers and make the gallery look attractive for users when they view it.**<br>


When the document is loaded, an AJAX call is made to download the data.json file (it contains an array of image objects) and displays images on the html page. When the user hovers over the image, show the larger version of the image along with the caption. <br>

Steps:<br>
1.	The css, js folders contain appropriate classes and files. data.json contains the data in an easy-to-read format. The images are supplied in two folders: images/square (for the gallery) and images/medium (for the popup).<br>
2.	Loop through the images array and using the appropriate jQuery DOM methods, add the appropriate <img> tags to the supplied ul class=“gallery” element. The image filenames are contained in the path property of each image object. Set the alt attribute of each <img>to the title property of the image object.<br>
3.	Use jQuery to attach handlers for the mouseenter, mouseleave, and mousemove events of the square images in the gallery.<br>
4.	For the mouseenter event, use jQuery to add the “gray” class to the square <img> under the mouse. If you examine that class, you will see it sets the filter property to grayscale(). Hint: remember that $(this) within an event handler references the DOM object that generated the event.<br>
5.	Also for the mouseenter event, use jQuery to generate a div element with an id=“preview” (the styling for #preview is already defined in gallery.css). Within that div element add an <img> element that displays the larger version of the image. Underneath that <img> add a p element for the caption (image title, city and date taken). The alt attribute of the square image under the mouse contains the image title. <br>
6.	You will need to use jQuery to set the left and top CSS properties for the #preview div element. You can retrieve the x, y coordinates (via the pageX and pageY properties) of the current mouse position from the event object that is passed to your event handler. You can calculate the new position by offsetting by some amount from the mouse x, y position.<br>
7.	Finally, once the #preview div element is constructed, simply append it to the <body>.<br>
8.	For the mouseleave event, remove the “gray” class from the square image under the mouse. Also remove the #preview div element from the body.<br>
9.	For the mousemove event, simply set the left and top CSS properties for the #preview div element using the same approach as described before.<br>
