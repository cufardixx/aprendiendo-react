import { CardTwitter } from "./assets/CardTwitter"
import './app.css'

export function App (){
    return(
        
        <div className="app">
            <CardTwitter isFollow={false} user={'facundopicia'} name={'Facundo Picia'}/>
            <CardTwitter isFollow user={'florpicia'} name={'Queen F'}/>
            <CardTwitter isFollow user={'blaasfacundo'} name={'BF'}/>
        </div>
    )
}