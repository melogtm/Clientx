import "./adduser.css"; 

export default function AddUser() {
  return (
    <div className="adduser">
        <h3 className="formTitle">Cadastro de Novo Cliente</h3>
        <form className="userForm">
            <div className="userFormGroup">
                <label htmlFor="nameInput">Nome do Cliente</label>
                <input name="nome" id="nameInput" className="formUserInput" type="text" autoFocus={true} />
            </div>
            <div className="userFormGroup">
                <label htmlFor="emailInput">Email do Cliente</label>
                <input name="email" id="emailInput" className="formUserInput" type="email" />
            </div>
            <div className="userFormGroup">
                <label htmlFor="phoneInput">Número do Cliente</label>
                <input name="phone" id="phoneInput" className="formUserInput" type="text" />
            </div>

            <button className="formSubmitButton" type="submit">Cadastrar Cliente</button>
        </form>
    </div>
  )
}
