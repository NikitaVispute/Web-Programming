Main Functionalities:

1.	User signup and login:
2.	List of available products/services in the system:
3.	Search/Filter Functionality:
4.	Paging Functionality for listing products/services:
5.	Add/Update item(s) to the cart and checkout:
6.	Purchase history of the user:
7.	Admin user(s) functionality:

Database Design<br>
We have used MongoDB as our project database. We have 4 collections for our project:

1.	Accounts<br>
Each document in the accounts collection consists of an automatically-generated id for the user along with the username entered by the user while registering. Along with this, the password entered by the user is first hashed and hashed version of the password  is stored in the document.

2.	Carts<br>
Each document in the carts collection consists of an automatically-generated id along with the itemid for the item put in cart and the userid of the user whose cart items are being stored. It also stores the quantity for each item and a boolean flag to check if the item is deleted or not.

3.	Items<br>
Each document in the items collection consists of an automatically-generated id for the item along with an array of various details of the item like sizes, composition, type, size type, color, style care instructions, age group, gender, price. Along with this, an image for the item along with its caption is also stored. It also stores the boolean flag to check if the item is deleted or not. 

4.	Orders<br>
User can view their orders history from the order history in the main menu. It displays all the orders and the respective amounts.

Languages/FrameWorks<br>
For this website, we have implemented 
1.	Backend using NodeJS and Express
2.	Frontend using Bootstrap, HTML
3.	Database using MongoDB

