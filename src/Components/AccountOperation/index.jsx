import { useRef, useState } from 'react'
import { connect } from 'react-redux/es/exports'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faPen } from '@fortawesome/free-solid-svg-icons'
import './operation.css'

function AccountOperation(props) {

    const data = props.operation
    const dropButton = useRef(null)
    const categoryButton = useRef(null)
    const notesButton = useRef(null)
    const infos = useRef(null)
    const [chevronUp, setChevronUp] = useState(false)

    function clickDropButton() {
        if (infos.current.classList.contains("infos-frame")) {
            infos.current.classList.add("unvisible")
            infos.current.classList.remove("infos-frame")
            setChevronUp(false)
        } else if (infos.current.classList.contains("unvisible")){
            infos.current.classList.add("infos-frame")
            infos.current.classList.remove("unvisible")
            setChevronUp(true)
        }
    }


    function clickCategoryButton(e) {
        e.preventDefault()
        alert(data.amount)
    }

    function clickNotesButton(e) {
        e.preventDefault()
    }

    return (
        <div className='operation-wrapper'>
            <div className='overview-wrapper'>
                <div className='button-wrapper'>
                    <button className='no-style-button' ref={dropButton} onClick={clickDropButton}><FontAwesomeIcon icon={chevronUp? faChevronUp: faChevronDown}/></button>
                </div>
                <p>{data.date}</p>
                <p>{data.description}</p>
                <p>{data.amount}</p>
                <p>{data.balance}</p>
            </div>
            <div className='unvisible' ref={infos}>
                <div className='button-wrapper'></div>
                <div className='infos-wrapper'>
                    <p>Transaction type: {data.type}</p>
                    <div className='change-wrapper'>
                        <p>Category: {data.category}</p>
                        <div className='button-wrapper-tiny'>
                            <button className='no-style-button' ref={categoryButton} onClick={clickCategoryButton}><FontAwesomeIcon icon={faPen}/></button>
                        </div>
                    </div>
                    <div className="change-wrapper">
                        <p>Notes: </p>
                        <div className='button-wrapper-tiny'>
                            <button className='no-style-button' ref={notesButton} onClick={clickNotesButton}><FontAwesomeIcon icon={faPen}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AccountOperation