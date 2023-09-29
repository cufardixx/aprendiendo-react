import { CardTwitter } from "./assets/CardTwitter"
import './app.css'
import { users } from "./assets/UserList"



export function App (){
    return(
        
        <section className="app">

            <div className="contenedor">
                <strong className="text-header">A quién seguir</strong>
                {
                users.map(user =>{
                    const {userName, name}= user
                    return(
                        <CardTwitter
                        userName={userName}
                        name={name}
                        key={userName}
                        >
                    
                        </CardTwitter>
                    )
                })
                }
                 <span className="footer-text">Ver mas...</span>
            </div>
        </section>
    )
}