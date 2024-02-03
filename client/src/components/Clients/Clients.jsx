import "./clients.css";
import Client from "../Client/Client";

export default function Clients() {
  return (
    <div className="clients">
        <section className="clientsButtons">
            <button className="addClientBtn">Adicionar cliente</button>
            <section className="clientsSearch">
                <input type="text" placeholder="Pesquisar cliente" />
            </section>
        </section>
        <table className="clientsTable">
        <tr className="tableHead">
            <th className="tableHeadItem">Nome</th>
            <th className="tableHeadItem">Email</th>
            <th className="tableHeadItem">Telefone</th>
        </tr>   
        <Client name="Ernst Handel" email="José@gmail.com" phone="+5581998534059" /> 
        <Client name="Ernst Handel" email="José@gmail.com" phone="+5581998534059" /> 
        <Client name="Ernst Handel" email="José@gmail.com" phone="+5581998534059" /> 
        </table>
    </div>
  )
}
