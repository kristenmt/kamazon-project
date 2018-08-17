-- Drop Database if a previous exists --
DROP DATABASE IF EXISTS bamazon_cust_db;

-- Make Database -- 
CREATE DATABASE bamazon_cust_db; 
-- Makes it so all of the following code will affect db -- 
USE bamazon_cust_db; 
-- Making Table called auction -- 
CREATE TABLE products ( 
    id INT NOT NULL AUTO_INCREMENT,
    item_id INTEGER NOT NULL, 
    product_name VARCHAR(225) NOT NULL, 
    department_name VARCHAR(225), 
    price DECIMAL(9,2) NOT NULL, 
    stock_quantity INTEGER(100) NOT NULL,
    PRIMARY KEY (id)
);

-- List of products to insert into inventory db
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Apple Watch", "Electronics", 289.90, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Sony CD Player", "Electronics", 79.50, 150);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Organic Chamomille Tea", "Food & Drink", 6.90, 472);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Dog Biscuits", "Pets", 9.23, 1906);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Sunglasses", "Accessories", 27.20, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Pacifiers", "Babies", 6.90, 500);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Dog Coller", "Pets", 19.75, 960);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Red Nail Polish", "Health & Beauty", 3.99, 1000);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Beard Trimmer", "Health & Beauty", 29.90, 770);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Skor Bar", "Food & Drink", 1.20, 5000);
