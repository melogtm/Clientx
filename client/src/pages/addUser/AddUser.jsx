import { useState } from "react";
import "./adduser.css"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

export default function AddUser() {


    const [client, setClient] = useState({
        nome: '',
        email: '', 
        phone: '' 
    });

    const navigate = useNavigate(); 

    function handleClient(e) {
        const propertyChange = e.target.name; 

        setClient({
            ...client, 
            [propertyChange]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault(); 
        axios.post("http://localhost:9000/adicionar", client).then((response) => console.log(response.data));
        navigate("/"); 
    };

    return (
        <div className="adduser">
            <h3 className="formTitle">Cadastro de Novo Cliente</h3>
            <form className="userForm">
                <div className="userFormGroup">
                    <label htmlFor="nameInput">Nome do Cliente</label>
                    <input onChange={handleClient} name="nome" id="nameInput" className="formUserInput" type="text" autoFocus={true} />
                </div>
                <div className="userFormGroup">
                    <label htmlFor="emailInput">Email do Cliente</label>
                    <input onChange={handleClient} name="email" id="emailInput" className="formUserInput" type="email" />
                </div>
                <div className="userFormGroup">
                    <label htmlFor="phoneInput">Número do Cliente</label>
                    <input onChange={handleClient} name="phone" id="phoneInput" className="formUserInput" type="text" />
                </div>

                <button onClick={handleSubmit} className="formSubmitButton" type="submit">Cadastrar Cliente</button>
            </form>
        </div>
    )
}
