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
  password: "",
  database: "bamazon_cust_DB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  //go into the connection object and get the id
  console.log("connected as id " + connection.threadId);
  
  // function to show all items for sale to the customer when file opened
 
 queryForSale();
  
});

function queryForSale() {
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++){
          console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
          
      }
      console.log("-------------------------");
      connection.end();
      
    });
    }