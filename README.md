
# Running locally 
## To run the application locally, you need to follow these steps:

    Make sure you have a web server (Xampp , e.g. Apache) and a database (e.g. MySQL) installed on your computer.

    Clone the project from GitHub using the following command:

    git clone https://github.com/JOBOYA/LE_QUAI_ANTIQUE.git

    Download the source code of the application and place it in the directory of your web server.

    Create a database and import the PHP script file provided in the source code to create the necessary tables.

    Modify the database connection settings in the configuration file (usually called config.php).

    Open your browser and access the URL of the application (usually http://localhost/LE_QUAI_ANTIQUE/).
# Creating an administrator
## To create an administrator account for the web application's back office, you need to follow these steps:

    Access the database and insert a new row in the users table specifying a username, password and setting the is_admin field to 1.

    Log in to the application with the username and password you just created. You should now have access to the back office.

# Creating a table in the database 

## To create a table in the database, you need to execute a SQL create table query. Here is of a SQL query that creates a table named reservations with the fields suivants:


```
  CREATE TABLE reservations (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nom VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  tel VARCHAR(255) NOT NULL,
  allergenes VARCHAR(255),
  details_allergenes TEXT,
  date DATE,
  heure TIME,
  couverts INT(11),
  message TEXT,
  PRIMARY KEY (id)
);

```
# Don't forget to change the database login credentials in the php file !

![Screenshot](https://github.com/JOBOYA/LE_QUAI_ANTIQUE/blob/main/images/screenshot.jpg?raw=true)

## Creating a .htaccess file with your login credentials
To run the function with sendmail, you need to configure your email address in the PHP file and consult the documentation on sendmail (link). To create a .htaccess file with your login credentials for using the sendmail function, you need to follow these steps:

    Create a new file in your root directory and name it ".htaccess" (without file extension)
    Open the .htaccess file with a text editor and add the following lines:
```bash
SetEnv DB_SERVERNAME "YOUR_SERVNAME"
SetEnv DB_USERNAME "YOUR_DBNAME"
SetEnv DB_PASSWORD "DB_PASSWORD"
SetEnv DB_NAME "DB_NAME"

```
                


    Configure your email address in the PHP file that uses the sendmail function.
    Consult the documentation on sendmail for more information on its usage Documentation

[sendmail](https://www.sendmail.com/documentation) 
    Note: Make sure that the paths specified in the .htaccess and .htpasswd files are correct and accessible.