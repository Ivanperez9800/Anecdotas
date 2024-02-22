
const Part = (props) => {

    const { name, exercises } = props.part;

    // console.log(name)
   
  return (
   <p> {name}: {exercises} </p>
  )
}

export default Part