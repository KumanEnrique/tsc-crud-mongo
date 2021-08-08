import server from './app'
import { db } from './database';

function main(){
    db()
    server.start();
    console.log('en index.ts')
}
main();