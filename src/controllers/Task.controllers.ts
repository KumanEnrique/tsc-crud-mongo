import {Request,Response} from 'express'
import Task from '../models/Task'

export async function getTasks(req:Request,res:Response){
    const tasks = await Task.find()
    res.render('tasks/index',{tasks})
}
export async function createTask(req:Request,res:Response){
    const {title,description} = req.body
    const task = new Task({title,description})
    await task.save()
    console.log(task)
    res.redirect('/tasks')
}
export async function deleteTask(req:Request,res:Response){
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/tasks')
}
export async function updateTask(req:Request,res:Response){
    const {id} = req.params
    const {title,description} = req.body
    await Task.findByIdAndUpdate(id,{title,description})
    res.redirect('/tasks')
}