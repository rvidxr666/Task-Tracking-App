import React, {useState} from 'react'


const FormInitial = (props) => {
    const [descText, setDesc] = useState("")
    const [date, setDate] = useState("")

    const onChangeName = (e) => {
        setDesc(e.target.value)
    }

    const onChangeDate= (e) => {
        setDate(e.target.value)
    }

    const onSubmit = (e) => {
        props.modifyFunc(e)
        setDesc("")
        setDate("")
    }

    return (
        <form onSubmit={onSubmit} className="mt-1">
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label ml-3">Taskname</label>
                <div className="col-sm-12">
                    <input type="text" value={descText} className="form-control" onChange={onChangeName} id="TaskDescription"/>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Deadline</label>
                <div className="col-sm-12">
                    <input type="date" value={date} className="form-control" onChange={onChangeDate} id="Deadline"/>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-success" style={{"width":"85px"}} type="submit">Confirm</button>
            </div>         
        </form>
    ) 
}

export default FormInitial;