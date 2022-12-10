import React, {useState, useEffect} from 'react'
import Task from './Task.js'
import FormInitial from '../Form/FormInitial.js'
import axios from 'axios'

const Tasks = () => {

    const [isVisibleForm, changeFormStatus] = useState(false)
    const [curTasks, changeTask] = useState("")

    const fetchAPI = async () => {
        var res = await axios.get(`http://${process.env.REACT_APP_backend_host_task}:8080/tasks`)
        changeTask(res.data)
    }

    useEffect(() => {
        fetchAPI()
    }, [])

    const modifyDB = async (e, reqType="POST", id=null) => {
        e.preventDefault()

        if (reqType === "DELETE") {
            console.log(taskName, deadlineDate)
            await axios.delete(`http://${process.env.REACT_APP_backend_host_task}:8080/tasks/${id}`)
            fetchAPI()
            changeFormStatus(false)
        }

        var taskName = e.target[0].value
        var deadlineDate = e.target[1].value
        var validation = validateDate(deadlineDate)
        console.log(taskName, deadlineDate, new Date(Date.now()).toISOString().substring(0, 10))

        if (validation && reqType === "POST") {
            await axios.post(`http://${process.env.REACT_APP_backend_host_task}:8080/tasks`, 
                {
                    "task": taskName,
                    "dateCreated": new Date(Date.now()).toISOString().substring(0, 10),
                    "dateDue": deadlineDate
                } 
            )
            fetchAPI()
            changeFormStatus(false)
        }

        if (validation && reqType === "PUT") {
            console.log(taskName, deadlineDate)
            await axios.put(`http://${process.env.REACT_APP_backend_host_task}:8080/tasks/${id}`, 
                {
                    "task": taskName,
                    "dateDue": deadlineDate
                } 
            )
            fetchAPI()
            changeFormStatus(false)
        }
        console.log(curTasks)
    }


    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                        <button class="btn btn-success" type="button" onClick={() => changeFormStatus(!isVisibleForm)}>Add new task</button>
                    </div>
                    {isVisibleForm && <FormInitial modifyFunc={modifyDB}/>}
                    {renderTasks(curTasks, modifyDB)}
                </div>
            </div>
        </div>    
    )
}

const validateDate = (date) => {
    var dateNow = Date.now();
    var dedlineDate = new Date(date)
    if (dedlineDate < dateNow) {
        alert("Deadline should not be earlier than today's date!")
        return false
    } 
    return true
}
 

const renderTasks = (dbObject, onChangeFunc) => {
    if (dbObject) {
        let lstOfTasks = dbObject.map((element) => {
            return (
                <Task 
                    key={element.id} task={element.task} id={element.id} 
                    dateCreated={element.dateCreated} dateDue={element.dateDue}
                    onChangeFunc={onChangeFunc} 
                />
            )
        })

        return lstOfTasks;
    } else {
        return (
            <div className="mt-3"><b>List of tasks is empty!</b></div>
        )
    }
}

export default Tasks; 