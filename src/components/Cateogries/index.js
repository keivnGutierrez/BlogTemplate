import React from 'react'

import "./style.css"


export default function Categories({list}) {
    return (
        <ul className='categories'>
            {
                list.map(
                    () => <li className='categories__item'><a>una categoria</a></li>
                )
            }
        </ul>
    )
}