import Form from '../Form/Form.js'
import React, {useState} from 'react'



const Task = (props) => {
    const [formVisibility, setVisibility] = useState(false)

    const onDone = (e) => {
        console.log(e)
        props.onChangeFunc(e, "DELETE", props.id)
    }

    return (
            <div className="card mt-3" style={{"width": "24rem"}}>
                <div className="card-body">
                    {/* <div><b>Task ID: </b>{props.id}</div> */}
                    <div><b>Description: </b>{props.task}</div>
                    <div><b>Date Created: </b>{props.dateCreated}</div>
                    <div><b>Date Due: </b>{props.dateDue}</div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button class="btn btn-success" style={{"width":"65px"}} onClick={onDone} type="button">Done</button>
                        <button class="btn btn-primary" style={{"width":"65px"}} onClick={() => setVisibility(!formVisibility)} type="button">Edit</button>
                    </div>
                {formVisibility && <Form taskID={props.id} onChangeFunc={props.onChangeFunc} />}
            </div>  
        </div>
    )
}



export default Task;