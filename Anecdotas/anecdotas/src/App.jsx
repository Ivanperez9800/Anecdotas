import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(_ => 0))

  const next = () => {
    setSelected(selected === anecdotes.length - 1 ? 0 : selected + 1);
  };

  const voteSelected = () => {
    const newVotes = [...votes] //HACE UNA COPIA DEL ARRAY VOTES QUE CONTIENE 8 CEROS [0,0,0,0,0,0,0,0]
    newVotes[selected] += 1  // la cantidad de votos que hay en el array copiado en la posicion de selected 
    setVotes(newVotes)  // ACTUALIZO EL ARRYA ORIGINAL votes CON LOS DATOS DEL ARRAY COPIADO


    console.log( "newVotes[selected]", newVotes[selected]) 
    console.log( "votes[mostVotes]", votes[mostVotes])
    
    //COMPARA SI EL LA CANTIDAD DE VOTOS DEL LA ANECDOTA ACTUAL ES MAS GRANDE QUE EL NUMERO DEL MAS VOTADO
    if (newVotes[selected] > votes[mostVotes]) {

      //SI ES ASI, ACTUALIZA LA POSICION DEL MAS VOTADO CON LA POSICION DE LA ANECDOTA ACTUAL
      setMostVotes(selected) 
    }
  }
 
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <div>
        <button onClick={voteSelected}>vote</button>
        <button onClick={next}>Next Anecdote</button>
        
      </div>
      <h2>Anecdote with the most votes</h2>
      <div>{anecdotes[mostVotes]}</div> {/*MOST VOTES CONTIENE LA POSICION DEL MAS VOTADO */}
      <div>has {votes[mostVotes]} votes</div> {/* VOTES ES UN ARRAY DE 0 Y MOSTVOTES CONTIENE LA PSOCION DEL MAS VOTADO */}
    </div>
  )
}

export default App