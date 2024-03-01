import { useState } from 'react'
import Button from './Components/Button'
import Statistics from './Components/Statistics';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClickTypeFeedBack = (type) => {

    return () => {
      switch (type) {
        case 'good':
          const updateGood = good + 1;
          setGood(updateGood);
          break;
        case 'bad':
          const updateBad = bad + 1;
          setBad(updateBad);
          break;
        case 'neutral':
          const updateNeutral = neutral + 1;
          setNeutral(updateNeutral)
          break;
        default:
          break;
      }
    };

  }

  const total = good + neutral + bad;
  const total_puntuacion = (good * 1) + (neutral * 0) + (bad * -1);
  const average = total_puntuacion / total;
  const positive = (good / total) * 100;


  return (
    <>
      <h2>Give Feedback</h2>

      <Button handleClick={handleClickTypeFeedBack('good')} text="Good" />
      <Button handleClick={handleClickTypeFeedBack('neutral')} text="Neutral" />
      <Button handleClick={handleClickTypeFeedBack('bad')} text="Bad" />

      <Statistics bad={bad} good={good} neutral={neutral} total={total} average={average} positive={positive} />

    </>
  )
}

export default App
