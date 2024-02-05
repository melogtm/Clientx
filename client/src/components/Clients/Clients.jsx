import "./clients.css";
import Client from "../Client/Client";
import { useState } from "react";
import users from "../../db/users"; // While there is no database


export default function Clients() {

  const [listUsers, setListUsers] = useState(users);

  function handleSearch(e) {
    let searchValue = e.target.value;
    let filteredBySearch = [];

    filteredBySearch = users.filter((user) => `${user.name}${user.email}${user.phone}`.includes(searchValue)); 
    
    setListUsers(filteredBySearch); 
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
        { listUsers.map((user) => {
          return <Client key={user.id} name={user.name} email={user.email} phone={user.phone} /> 
        }) }
        </tbody>
        </table>
    </div>
  )
}
