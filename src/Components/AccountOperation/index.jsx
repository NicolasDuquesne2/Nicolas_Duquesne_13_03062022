import { useRef } from 'react'
import { connect } from 'react-redux/es/exports'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faPen } from '@fortawesome/free-solid-svg-icons'
import { changeChevron } from '../../Redux/Chevron/actionChevron'
import './operation.css'

function AccountOperation(props) {

    const data = props.operation
    const dropButton = useRef(null)
    const categoryButton = useRef(null)
    const notesButton = useRef(null)
    const infos = useRef(null)

    function clickDropButton() {
        if (infos.current.classList.contains("infos-frame")) {
            infos.current.classList.add("unvisible")
            infos.current.classList.remove("infos-frame")
            props.changeChevron()
        } else if (infos.current.classList.contains("unvisible")){
            infos.current.classList.add("infos-frame")
            infos.current.classList.remove("unvisible")
            props.changeChevron()
        }
    }


    function clickCategoryButton(e) {
        e.preventDefault()
        alert(data.amount)
    }

    function clickNotesButton(e) {
        e.preventDefault()
        alert(data.amount)
    }

    return (
        <div className='operation-wrapper'>
            <div className='overview-wrapper'>
                <div className='button-wrapper'>
                    <button className='no-style-button' ref={dropButton} onClick={clickDropButton}><FontAwesomeIcon icon={props.chevronUp? faChevronUp: faChevronDown}/></button>
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

const mapStateToProps = state => {
    return {
        chevronUp: state.chevron.chevronUp
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeChevron: () => dispatch(changeChevron())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountOperation)