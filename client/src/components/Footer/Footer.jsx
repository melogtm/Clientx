import "./footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
        <section className='footerCredits'>
            <div className="footerCreditsAuthor">
                <i className="far fa-flag"></i>
                <p>Feito por <a href="https://github.com/melogtm">Gabriel Trigueiro</a>.</p>
            </div>
            <div className="footerCreditsDesafio">
            <i className="far fa-flag"></i>
                <p><a href='https://docs.google.com/document/d/1D9UFnRlWfUUlizmGV-8EIKT8YXpjO2Fxzw7ch1muz9U/edit#heading=h.mrn2lppv65m0'>Desafio</a> proposto.</p>
            </div>
            
        </section>

        <section className='footerLinks'>
            <ul className='footerLinksList'>
                <li className="footerLinksItem">Github do Projeto</li>
                |
                <li className="footerLinksItem">Contato</li>
                |
                <li className="footerLinksItem">Licença</li>
                
            </ul>
        </section>

        <section className='footerCopy'>
            <p>© Copyright {new Date().getFullYear()}</p> 
        </section>
    </footer>
  )
}
