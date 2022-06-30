import React from 'react'
import './icon.css'

export default function Icon({ type = 'subject' }) {
    return (
        <ul className={`icon icon-${type}`}>
            <li className="icon__rectangule icon__rectangule-1"></li>
            <li className="icon__rectangule icon__rectangule-2"></li>
            <li className="icon__rectangule icon__rectangule-3"></li>
        </ul>
    )
}


