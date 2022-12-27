import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.doule ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button 
            onClick={e => props.click(props.label)}
            className={`button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.tiple ? 'triple' : ''}
            `}>
            { props.label }
        </button>
    )
}