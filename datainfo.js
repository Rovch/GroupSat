
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    // password: "",
    database: 'playlist'
});



// CREATE TABLE prodtable (
//     id INT NOT NULL AUTO_INCREMENT,
//     item VARCHAR(45) NULL,
//     bid INTEGER(45) NULL,
//     buy_now INTEGER(45) NULL,
//     itm_status VARCHAR(2),
//     PRIMARY KEY (id)
//   );
  
//   INSERT into prodtable ( item,bid, buy_now,itm_status)
//   value("bmw",2.5, 50, 'N' );
  
//   INSERT into prodtable ( item,bid,buy_now, itm_status)
//   value("mazda",2, 20 ,'N' );
  
  
//   select * from prodtable;