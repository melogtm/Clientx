import query from "./connection.js";

async function getClientsList(limit = 10, offset = 0) {
    const clients = await query("SELECT id, nome, email, phone FROM clientes ORDER BY id DESC LIMIT $1 OFFSET $2", [limit, offset]); 

    if (clients.rowCount === 0) return false; 
    return clients.rows; 
};

async function addClient(new_client_array) {
    const clientAdded = await query("INSERT INTO clientes(nome, email, phone) VALUES($1, $2, $3) RETURNING *", new_client_array); 

    if (clientAdded.rowCount === 0) return false; 
    return clientAdded.rows[0]; 
};


export {
    getClientsList,
    addClient
}