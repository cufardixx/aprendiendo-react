import { CardTwitter } from "./assets/CardTwitter"
import './app.css'

export function App (){
    return(
        
        <div className="app">
            <CardTwitter  user={'facundopicia'} name={'Facundo Picia'}/>
            <CardTwitter  user={'florpicia'} name={'Queen F'}/>
            <CardTwitter  user={'blaasfacundo'} name={'BF'}/>
        </div>
    )
}