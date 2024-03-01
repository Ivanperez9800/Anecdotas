import React from 'react'

const StatisticsLine = ({ text, total }) => {
    return (

        <tr>
            <td>{text}:</td>
            <td>{total}</td>
        </tr>

    )
}

export default StatisticsLine