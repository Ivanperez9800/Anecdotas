import React from 'react'
import StatisticsLine from './StatisticsLine'

const Statistics = ({ good, neutral, bad, total, average, positive }) => {


    if (total === 0) {
        return <p>No Feedback Given</p>
    }

    return (
        <>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticsLine text="Good" total={good} />
                    <StatisticsLine text="Bad" total={bad} />
                    <StatisticsLine text="Neutral" total={neutral} />
                    <StatisticsLine text="All" total={total} />
                    <StatisticsLine text="Average" total={average.toFixed(2)} />
                    <StatisticsLine text="Positive" total={positive.toFixed() + "%"} />
                </tbody>
            </table>

        </>
    )
}

export default Statistics