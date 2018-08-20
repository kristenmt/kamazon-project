var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; 8889 or 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_cust_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  managerOptions();
  
});
//initial function for the manager view
function managerOptions(){
    inquirer
    .prompt({
        //format and question #1 to ask manager--menu options
        name: "mgrMenu",
        type: "list",
        message: "What do you need to do?",
        choices: ["View Products for Sale", "View Low Inventory Products", "Update Inventory for a Product", "Add Product to Inventory"]
    })
    //function to run after the inquiry based on manager's selection
 .then(function(answer){
     switch (answer.mgrMenu){
         //to view all products for sale
     case "View Products for Sale":
        totalInv();
        break;
        //to view products with low inventory
        case "View Low Inventory Products":
        lowInv();
        break;
        //to update inventory for a product
        case "Update Inventory for a Product":
        updateInv();
        break;
        //to add a product to products for sale
        case "Add Product to Inventory":
        addProduct();
        break
     }
      
 })
}
function totalInv(){
    connection.query("SELECT * FROM products", function(err, res) {
        // shows all items for sale in a table format
        console.table(res);
        
        //ends the query, restarts the connection
        connection.end();
        });
}
