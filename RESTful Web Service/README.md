Implement a simple RESTful web service using PHP.

Web service provided information about books.

http://localhost/books will give list of books that are stored in your database.

http://localhost/books/id will give all book details for given book id.

Results are in JSON or XML format.

Database schema is as follows:

Books(ISBN, Author, Title, Price, Category)

books.sql file can be used populate your database. 

database name:HW4
table name: books 
default hostname, username and password for database connection using MAMP are:
host: localhost 
username: root 
password: root

Database created  using MySQL in PHPMyAdmin


You will need to configure your MAMP server to define an end point (URL) for your web service.

How to configure MAMP for Mac OS:

Create api folder under /Applications/MAMP/htdocs directory.

Save index.php under /Applications/MAMP/htdocs/api directory.

Add below line to  /Applications/MAMP/conf/apache/httpd.conf file:
Alias /books "/Applications/MAMP/htdocs/api/index.php"

How to configure MAMP for Windows:

Create api folder under C:/MAMP/htdocs directory.

Save index.php under C:/MAMP/htdocs/api directory.

Add below line to C:/MAMP/conf/apache/httpd.conf file:
Alias /books "C:/MAMP/htdocs/api/index.php"

Restart apache server.

Check your api at http://localhost/books.
