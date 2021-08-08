import mongoose from 'mongoose'

export async function db(){
    try {
        await mongoose.connect('mongodb://localhost/tsc-crud-app',{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('db is connected')
    } catch (error) {
        console.log(error)
    }
}