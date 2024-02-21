
const Part = (props) => {

   const { part, exercises } = props.part;
   
  return (
   <p> {part}: {exercises} </p>
  )
}

export default Part