import express,{Application} from 'express'
import morgan from 'morgan'
import exphbs from 'express-handlebars'
import _Handlebars from 'handlebars';
import path from 'path';
import {allowInsecurePrototypeAccess} from '@handlebars/allow-prototype-access';
import TasksRoutes from './routes/task.routes'


class Server {
    app:Application
    constructor(){
        this.app = express()
        this.settings();
        this.middleware();
        this.static();
        this.routes();
    }
    settings(){
        this.app.set('port',process.env.PORT || 3000)
        this.app.set('views',path.join(__dirname,'views'));
        this.app.engine('.hbs',exphbs({
            handlebars: allowInsecurePrototypeAccess(_Handlebars),
            extname:'hbs',
            defaultLayout: 'main',
            layoutsDir:path.join(this.app.get('views'),'layouts'),
            partialsDir:path.join(this.app.get('views'),'partials'),
            helpers:require('./lib/helpers')
        }))
        this.app.set('view engine','.hbs')
        this.app.use(express.static(path.join(__dirname,'public')))
    }
    middleware(){
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(express.json())
        this.app.use(morgan('dev'))
    }
    static(){}
    routes(){
        this.app.get('/',(req,res)=>{
            res.render('index')
        });
        this.app.use(TasksRoutes)
    }
    start(){
        this.app.listen(this.app.get('port'),()=>{
            console.log(`server on http://localhost:${this.app.get('port')}`)
        })
    }
}
const server = new Server();
export default server