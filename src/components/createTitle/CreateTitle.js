import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, newTitle } from '../../store/titleSlice'

function CreateTitle() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.titleReducer.data)
    const title = useSelector(state => state.titleReducer.title)

    const changeTitleFunc = (e) => {
        dispatch(newTitle(e.target.value))
    }

    const submitTitle = () => {
        dispatch(addData(title))
    }

    return (
        <div>
            <div>
                <h1>{data} </h1>
            </div>
            <input type="text" onChange={changeTitleFunc} value={title} />
            <button onClick={submitTitle} >new title</button>
        </div>
    )
}

export default CreateTitle
