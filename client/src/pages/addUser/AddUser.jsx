import { useState } from "react";
import "./adduser.css"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom";



export default function AddUser() {

    const navigate = useNavigate(); 
    const [validateError, setValidateError] = useState({
        email: false, 
        phone: false
    });
    const [client, setClient] = useState({
        nome: '',
        email: '', 
        phone: '' 
    });

    function isAPhone(pnumber) {
        const patternForPhones = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/; 

        return patternForPhones.test(pnumber); 
    };

    function isAMail(email) {
        const patterForMail = /\S+@\S+\.\S+/; 

        return patterForMail.test(email.toLowerCase()); 
    };

    function handleClient(e) {
        const propertyChange = e.target.name; 

        setClient({
            ...client, 
            [propertyChange]: e.target.value
        });

        setValidateError({
            email: !isAMail(client.email),
            phone: !isAPhone(client.phone)
        });
    };

    function handleSubmit(e) {
        e.preventDefault(); 
        
        if (validateError.email || validateError.phone) {
            return -1;
        }

        axios.post("http://localhost:9000/adicionar", client).then((response) => console.log(response.data));
        navigate("/"); 
    };

    return (
        <div className="adduser">
            <h3 className="formTitle">Cadastro de Novo Cliente</h3>
            {validateError.phone &&  <div class="alert"><i className="fa-solid fa-triangle-exclamation"></i> Informe um número de telefone válido.</div>      
            }
            {validateError.email &&  <div class="alert"><i className="fa-solid fa-triangle-exclamation"></i> Informe um email válido.</div>      
            }
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
