CREATE DATABASE MarketManagerDB;

use MarketManagerDB -- This selects the MarketManagerDB

show tables; -- Displays all tables


-- Creating the UserAccounts Table
CREATE TABLE UserAccounts(  
    userID INT AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL,
    
    CONSTRAINT PK_userID PRIMARY KEY (userID)
);

-- Creating the SavedAssets Table
-- userID is a PK and a FK
CREATE TABLE SavedAssets(  
    userID INT,
    
    CONSTRAINT PK_SA_userID PRIMARY KEY (userID),
    CONSTRAINT FK_userID FOREIGN KEY (userID)
    REFERENCES UserAccounts(userID),

    assetName VARCHAR(20) NOT NULL,
    assetSymbol VARCHAR(10) NOT NULL
);



