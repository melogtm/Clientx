import "./topbar.css"; 

export default function Topbar() {
  return (
    <nav className="topbar">
        <section className="topbarText">
            <a href="/"><h2 className="topbarTitle">Clientx</h2></a>
            <small className="topbarTitleDesc">Sistema de Gerenciamento de Clientes</small>
        </section>
        <section className="topbarAnchor">
            <a className="topbarAbout" href="/sobre">Sobre</a>
        </section>
    </nav>
  )
}
