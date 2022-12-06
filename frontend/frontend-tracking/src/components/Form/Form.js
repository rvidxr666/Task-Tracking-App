import React, {useState} from 'react'


const Form = (props) => {
    const [descText, setDesc] = useState("")
    const [date, setDate] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e, props.taskID)
        props.onChangeFunc(e, "PUT", props.taskID)
    }


    return (
        <form onSubmit={onSubmit} className="mt-1">
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label ml-3">Taskname</label>
                <div class="col-sm-12">
                    <input type="text" className="form-control" id="TaskDescription"/>
                </div>
            </div>
            <div class="mb-3 row">
                <label class="col-sm-3 col-form-label">Deadline</label>
                <div className="col-sm-12">
                    <input type="date" className="form-control" id="Deadline"/>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-success" style={{"width":"85px"}} type="submit">Confirm</button>
            </div>       
        </form>
    ) 
}

export default Form;