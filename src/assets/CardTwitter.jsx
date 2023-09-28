export function CardTwitter({name, user}){
    return(
        <article className="card-articulo">
            <header className="card-cabecera">
            <img className="card-img" src={`https://unavatar.io/${user}`}></img>
            <div className="card-div-texto">
                <strong className="card-nombre">{name}</strong>
                <span className="card-nombre-usuario">@{user}</span>
            </div>
            </header>

            <aside className="card-aside">
                <button className="card-aside-boton">Seguir</button>
            </aside>
        </article>
    )
}