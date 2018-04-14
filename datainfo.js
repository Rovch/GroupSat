
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // password: "",
    database: 'prodtable'
});



// CREATE DATABASE Great_Bay;
// use Great_Bay;

// CREATE TABLE prodtable (
//   id INT NOT NULL AUTO_INCREMENT,
//   item VARCHAR(45) NOT NULL,
//   bid INTEGER(45) NOT NULL,
//   buy_now INTEGER(45)NOT NULL,
//   description VARCHAR(100) NOT NULL,
//   itm_status VARCHAR(2),
//   PRIMARY KEY (id)
// );

// INSERT into prodtable ( item,bid, buy_now,description,itm_status)
// value("bmw",2.5, 50,"bla bla bla bla ", 'N' );

// INSERT into prodtable ( item,bid,buy_now,description, itm_status)
// value("mazda",2, 20 ,"bla bla bla bla ",'N' );
