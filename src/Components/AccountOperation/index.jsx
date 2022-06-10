import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './operation.css'

function AccountOperation(operation) {

    const data = operation.operation
    const dropButton = useRef(null)
    const infos = useRef(null)
   
    const [chevronDown, setChevronDown] = useState(true)


    function clickDropButton() {
        if (infos.current.classList.contains("infos-frame")) {
            infos.current.classList.add("unvisible")
            infos.current.classList.remove("infos-frame")
            setChevronDown(true)
        } else if (infos.current.classList.contains("unvisible")){
            infos.current.classList.add("infos-frame")
            infos.current.classList.remove("unvisible")
            setChevronDown(false)
        }
    }


    return (
        <div className='operation-wrapper'>
            <div className='overview-wrapper'>
                <div className='button-wrapper'>
                    <button className='dropButton' ref={dropButton} onClick={clickDropButton}><FontAwesomeIcon icon={chevronDown? faChevronDown : faChevronUp}/></button>
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
                    <p>Category: {data.category}</p>
                    <p>Notes: </p>
                </div>
            </div>
        </div>
    )
}

export default AccountOperation