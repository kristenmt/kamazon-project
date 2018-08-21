<h1>Kamazon Site</h1>

<p>This is an Amazon-like app using MySQL and node.js. There are 2 views--customer and manager. When the customer initializes the app, all items for sale will populate in a table for the customer to peruse. Customer will be asked to select the product ID of the item he/she wishes to purchase, then asked the quantity. If the customer requires a quantity higher than what's available, a message will let the customer know the store doesn't have that many in stock, and will restart the app. If the store CAN accommodate the request, the app will calculate the total price and display it.</p>

<p>The manager side of the app will give the manager a menu of 4 options to choose from: 1) View Products for sale; 2) View Products with low inventory (below 5 in stock); 3) Update inventory quantity for an item; 4) Add new product. Choosing "View Products for sale" will show the entire inventory in a table format, complete with id #, name, department, price, and quantity in stock. Choosing "View Products with low inventory" will show product(s) with fewer than 5 in stock in a table format. Choosing "Update inventory quantity for an item" will ask the manager the id number of the product to update, then how many units to add. The app will then add that to the current number in stock, update the database with the new quantity, and alert the manager this was successful. The last option, "Add new product", will ask the manager the new id number, the name of the new product to be added, the department to put it in, the price of the product, and the number in stock. It will then alert the manager that the new product was added to the database successfully.</p>


<h4>Starting database video--shows the database with pre-populated inventory items.</h4>

![Alt Text](http://g.recordit.co/knzgcfwo09.gif)

<h4>Customer purchase video #1--shows how a customer can purchase an item successfully (i.e. enough is in stock).</h4>

![Alt Text](http://g.recordit.co/ZYm7QKWtPL.gif)

<h4>Customer purchase video #2--shows when a customer can't purchase an item (i.e. not enough is in stock).</h4>

![Alt Text](http://g.recordit.co/gzBEC0QeKw.gif)

<h4>Manager video #1--shows Manager going through options 1 and 2 in the manager menu.</h4>

![Alt Text](http://g.recordit.co/4S3JellVnK.gif)

<h4>Manager video #2--shows Manager going through option 3 in the manager menu--updating stock quantity.</h4>

![Alt Text](http://g.recordit.co/eTQnSXn1uw.gif)

<h4>Manager video #3--shows Manager going through option 4 in the manager menu--adding a new item to the inventory.</h4>

![Alt Text](http://g.recordit.co/KPqfuP1LlG.gif)

<h3>Technologies Used:</h3>
    <ul>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>2 NPM packages: inquirer and mysql</li>
        <li>MAMP</li>
        <li>Sequel Pro </li>
    </ul>