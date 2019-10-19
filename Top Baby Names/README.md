# Top Baby Names using AJAX, jQuery, PHP, HTML

Display the baby names and their popularity rankings for a given year and gender. <br>

You will implement the project using AJAX technology, PHP and MySQL.<br>

On your html page (babynames.html), you will have one division element for results, two drop-down lists (for year and gender) and one button.  Initially, you will not show any results. Once clicked on the button, you will call Ajax function, which will ultimately make a request for babynames.php on the server.<br>

In babynames.php, you will connect to the database and fetch the top-five popular names for the selected year and gender.  The default option for the year and gender is “All years” and “Both”.<br> 

The results will be passed to the client and will be used to dynamically change the contents of the division on the html page. Along with each baby name, you will also list the popularity ranking, gender and the year. <br>

For database part, create a table with following schema:<br>
Database name: HW3<br>
BabyNames (name, year, ranking, gender) <br>
For gender values, use ‘m’ and ‘f’.<br>

You can use attached sql file to insert records into your table.<br>
