import "dotenv/config"; 
import pkg from "pg"; 
const {Pool} = pkg; 

const pgPool = new Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPASS,
    port: 5432
});

async function query(sqlquery, params) {
    const client = await pgPool.connect(); 
    try {
        return await client.query(sqlquery, params); 
    } finally {
        client.release(); 
    }
}

export default query; 