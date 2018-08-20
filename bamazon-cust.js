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
  //go into the connection object and get the id
  //console.log("connected as id " + connection.threadId);
  
  // calls the function to show all items for sale to the customer when file opened
 queryForSale();
  
});
//function to show all items for sale
function queryForSale() {
    connection.query("SELECT * FROM products", function(err, res) {
    // shows all items for sale in a table format
    console.table(res);
    
    //calls the function to ask the item id of product customer wants to purchase
    productPurchase();
    });
    }
//function to ask customer what he/she wants to purchase
    function productPurchase(){
        inquirer
        .prompt([{
            //format and question #1 to ask customer--the id number
            name: "askID",
            type: "input",
            message: "What is the ID of the product you wish to purchase?"
        },
        {
            //format and question #2 to ask customer--the quantity
            name: "quantity",
            type: "input",
            message: "How many do you want to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
              }
        }
        
        ])
        //function to run after the inquiry
     .then(function(answer){
         //this is what will be pulled from the database and stored in a variable based on customer's answers to questions 1 & 2
            connection.query("SELECT * FROM products WHERE item_id=?", answer.askID, function(err, res){
                for (var i = 0; i < res.length; i++){
                    var stockQuantity = res[i].stock_quantity;
                var itemPrice = parseFloat(res[i].price);
                var userQuantity = (answer.quantity);
                    if (answer.quantity > stockQuantity){
                        if (err) throw err;
                        console.log("Sorry, we don't have enough in stock. Please try again.");
                   productPurchase();
                    }
                    else {
                        console.log("Excellent! We can fulfill your order.");
                        console.log("Your total is: ");
                        console.log(parseInt(itemPrice) * parseInt(userQuantity));
                        connection.end();
                    }
                }
            })
        });
    }
    
