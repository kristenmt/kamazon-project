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
function lowInv(){
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {

        // shows all items with low inventory in a table format
        console.table(res);
        
        //ends the query, restarts the connection
        connection.end();
        });
}
function updateInv(){

    inquirer
        .prompt([{
            //format and ask question to manager--which product
            name: "askMgrID",
            type: "input",
            message: "What is the ID of the product you wish to update?"
        },
        {
            //format and ask question #2 to ask manager--the quantity to add
            name: "quantityMgr",
            type: "input",
            message: "How many units do you wish to add?"
            
        }])
        
    
        .then(function(answer){
    // connection.query("SELECT stock_quantity FROM products WHERE item_id=?", [answer.askMgrID], function(err, res) {
    //     if (err) throw err;
    // })
        connection.query("UPDATE products SET stock_quantity = stock_quantity + ? WHERE id = ?", [(answer.quantityMgr), answer.askMgrID], function(err){
            //notifies manager update was successfull
            console.log("Inventory update was successful");
            
        //ends the query, restarts the connection
       connection.end();
        });
    });
 };
 function addProduct(){
     inquirer
     .prompt([
         {
             name: "productID",
             type: "input",
             message: "What is the product ID number of the item you wish to add?"
         },
     {
         name: "newName",
         type: "input",
         message: "What is the name of the product you wish to add?"
     },
     {
         name: "newDept",
         type: "input",
         message: "What department is this located in?"
     },
     {
        name: "newPrice",
        type: "input",
        message: "What is the price of the product you wish to add?"
    },
    {
        name: "newProdInv",
        type: "input",
        message: "How much is in stock of the new product?"
        }
        
    ])
    .then(function(answer){
  connection.query("INSERT INTO products SET ?",
  {
    item_id: answer.productID,  
    product_name: answer.newName,
    department_name: answer.newDept,
    price: answer.newPrice,
    stock_quantity: answer.newProdInv
  },
  function(err){
      if (err) throw err;
      console.log("New product was added to inventory");
      connection.end();
  }
)
 
    })
}
