import "./clients.css";
import Client from "../Client/Client";
import { useState, useEffect } from "react";
import axios from "axios"; 

const apiUrl = "http://localhost:9000/"

export default function Clients() {

  const [listUsers, setListUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + "clientes").then((response) => {
      setListUsers(response.data);
      setSearchResults(response.data);
    })
  }, [])

  function handleSearch(e) {
    let searchValue = e.target.value;
    let filteredBySearch = [];

    filteredBySearch = listUsers.filter((user) => `${user.nome}${user.email}${user.phone}`.includes(searchValue)); 
    
    setSearchResults(filteredBySearch); 
  };

  return (
    <div className="clients">
        <section className="clientsButtons">
            <a href="/adicionar"><button className="addClientBtn">Adicionar cliente</button></a>
            <section className="clientsSearch">
                <input onChange={handleSearch} type="text" placeholder="Pesquisar cliente" />
            </section>
        </section>
        <table className="clientsTable">
        <thead>
        <tr className="tableHead">
            <th className="tableHeadItem">Nome</th>
            <th className="tableHeadItem">Email</th>
            <th className="tableHeadItem">Telefone</th>
        </tr>
        </thead>
        <tbody>
        { searchResults.map((user) => {
          return <Client key={user.id} name={user.nome} email={user.email} phone={user.phone} /> 
        }) }
        </tbody>
        </table>
    </div>
  )
}
