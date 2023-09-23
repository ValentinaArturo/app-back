import { Sequelize } from "sequelize";

const db = new Sequelize('test','root','rootroot',{
    host:'test.ctlekidxpxtn.us-east-2.rds.amazonaws.com',
    port: 3306,
    dialect:'mysql'
});

export default db;