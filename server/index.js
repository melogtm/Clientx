import express from "express";
import { getClientsList, addClient } from "./database/operations.js";

const app = express(); 
const PORT = process.env.PORT || 3000;  

app.get("/clientes", async (req, res) => {

    let numClientsPerPage, offSetForPage, results; 

    numClientsPerPage = Math.floor(req.query.clients) || 10; // The default behavior is to show up 10 clients. 

    // If i want to see page 2, i will skip (2 - 1) * 10 = 10 clients. If I want to see page 3, I want to skip (3 - 1) * 10 = 20 clients. That's offset. See operations.js.
    offSetForPage = (Math.floor(req.query.page) - 1) * 10 || 0; 

    results = await getClientsList(numClientsPerPage, offSetForPage);

    if (!results) {
        res.sendStatus(404) //No client 
    } else {
        res.json(results); 
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}\n`); 
});