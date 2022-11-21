#!/bin/python3

from flask import Flask, request
from flask_cors import CORS
import sqlite3
from sqlite3 import Error
import json

app = Flask(__name__)
CORS(app)

##########################################################
# Database
##########################################################

# DB Connection
def get_connection():
    path = "./db/db.sqlite3"
    connection = None
    try:
        connection = sqlite3.connect(path)
        print("Connection to SQLite successful!")
    except Error as e:
        print(f"An error occurred: '{e}'")
    return connection

# DB Get
def db_get(sql):
    con = get_connection()
    with con:
        cursor = con.cursor()
        try:
            cursor.execute(sql)
            return cursor.fetchall()
        except Error as e:
            print(f"Error executing db_get(): {e}")

    cursor.close()
    con.close()

def db_get_dict(sql):
    con = get_connection()
    with con:
        con.row_factory = sqlite3.Row
        cursor = con.cursor()
        try:
            cursor.execute(sql)
            result = cursor.fetchall()
            result_dict = [{key: value[key] for key in value.keys()} for value in result]
            print(result_dict)
            return result_dict
        except Error as e:
            print(f"Error executing db_get(): {e}")

    cursor.close()
    con.close()

# DB Commit
def db_commit(sql, *args):
    con = get_connection()
    with con:
        cursor = con.cursor()
        try:
            cursor.execute(sql, *args)
            con.commit()
            print("Query successful")
        except Error as e:
            print(f"Error executing db_commit(): {e}")

    cursor.close()
    con.close()

# Init DB
def db_init():
    create_products_table = """
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price TEXT NOT NULL
        );
    """
    create_orders_table = """
        CREATE TABLE IF NOT EXISTS orders (
            product_id INTEGER NOT NULL,
            sold INTEGER NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products (id)
        );
    """

    db_commit(create_products_table)
    db_commit(create_orders_table)


    
##########################################################
# Helper
##########################################################

# Fill Products Table
def db_fill_products(products):
    insert_products = """
        INSERT INTO 
            products (name, price)
        VALUES
            (:name, :price);
    """
    
    for product in products:
        db_commit(insert_products, product)

# Fill Orders Table
def db_fill_orders(orders):
    insert_orders = """
        INSERT INTO 
            orders (product_id, sold, date, time)
        VALUES
            ( :product_id, :sold, DATE('now'), TIME('now', '+1 hour') )
    """
    
    print(orders)
    db_commit(insert_orders, orders)

# Read JSON file
def get_JSON_File():
    json_path = '../mock/mock_data.json'
    with open(json_path) as file:
        data = json.load(file)
    return data

# Read DB Orders

def db_get_orders():
    get_orders = """
        SELECT
            products.name, orders.sold, orders.date, orders.time
        FROM
            orders LEFT JOIN products ON orders.product_id = products.id
    """

##########################################################
# Routes
##########################################################

# Index
@app.route("/")
def hello_world():
    return "<p> Hello World!</p>"

# Test
@app.route("/test", methods=['GET','POST'])
def test():
    if request.method == 'GET':
        return "GET-Test erfolgreich"

    if request.method == 'POST':
        body = request.json
        print(body)
        return "POST-Test erfolgreich"


# Init
@app.route("/init", methods=['GET'])
def init_db():
    if request.method == 'GET':
        db_init()
        return "DB initialized."

# Products
@app.route("/products", methods=['GET', 'POST'])
def products():
    # Get Products
    if request.method == 'GET':
        sql = "SELECT * FROM products"
        result = db_get_dict(sql)
        for obj in result:
            obj['count'] = 0
        #return json.dumps(result)
        return result
    
    # Insert Products
    if request.method == 'POST':
        mock_products = [
            {
                "name" : "Glühwein",
                "price" : "5,50"
            },
            {
                "name" : "Limo",
                "price" : "5,50"
            }
        ]
        products = get_JSON_File()
        db_fill_products(products)
        return "Products inserted successfully!"

# Orders
@app.route("/orders", methods=['GET', 'POST'])
def orders():
    # Get all Orders
    if request.method == 'GET':
        sql = "SELECT * FROM orders"
        result = db_get(sql)
        return result
    
    # Insert Orders
    if request.method == 'POST':
        # mock_order= { "product_id" : 1, "sold" : 3 }
        body = request.json
        db_fill_orders(body)
        return "Orders inserted successfully!"
    
if __name__ == "__main__":
    port = 8080
    app.run(host='0.0.0.0', port = port) 
    