//importat hooks q funcionan como la memoria para recordar estados en componentes
import { useState } from "react"

export function CardTwitter({name, user}){

    const [isFollow, setIsFollow] = useState(false)

    const handleClick = () =>{
        setIsFollow(!isFollow)
    }

    const text = isFollow ? 'Siuiendo' : 'Seguir' 
    
    
    const classNameButton = isFollow 
    ? 'card-aside-boton is-follow'
    : 'card-aside-boton'

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
                <button className={classNameButton} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}