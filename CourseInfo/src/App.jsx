import Content from "./Components/Content";
import Header from "./Components/Header"
import Total from "./Components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  const data = [
    { part: 'Fundamentals of React', exercises: exercises1 },
    { part: 'Using props to pass data', exercises: exercises2 },
    { part: 'State of a component', exercises: exercises3 }
  ];


  return (
    <div>
      <Header course = {course} />
      <Content data={data} />
      <Total total= {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App