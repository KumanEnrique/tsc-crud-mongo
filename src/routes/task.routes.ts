import {Router} from 'express';
const router = Router();
import {getTasks,createTask,deleteTask,updateTask} from '../controllers/Task.controllers'

router.get('/tasks',getTasks)
router.get('/tasks/add',(req,res)=>{
    res.render('tasks/add')
})
router.post('/tasks/add',createTask)
router.get('/delete/:id',deleteTask)
router.post('/update/:id',updateTask)
export default router