import { useEffect, useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({}); // Initialize votes as an empty object

  const [maxNumber, setMaxNumber] = useState(Number.MIN_SAFE_INTEGER);
  const [maxKey, setMaxKey] = useState(null);

  const next = () => {
    setSelected(selected === anecdotes.length - 1 ? 0 : selected + 1);
  };

  const handleVote = () => {
    // Create a copy of the votes object and update the count for the selected anecdote
    const updatedVotes = { ...votes };
    updatedVotes[selected] = (updatedVotes[selected] || 0) + 1;
    setVotes(updatedVotes);
  };
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  // Get the number of votes for the selected anecdote
  const votesCount = votes[selected] || 0;

  //GET THE MAX VOTE ANCEDOTE

  useEffect(() => {
    let maxNumberTemp = Number.MIN_SAFE_INTEGER;
    let maxKeyTemp = null;

    for (const key in votes) {
      if (votes.hasOwnProperty(key)) {
        const value = votes[key];
        if (value > maxNumberTemp) {
          maxNumberTemp = value;
          maxKeyTemp = key;
        }
      }
    }

    setMaxNumber(maxNumberTemp);
    setMaxKey(maxKeyTemp);
  }, [votes]);



  return (
    <>

    <h1>Anecdote of the Day</h1>
      <p>
        {selected}-{anecdotes[selected]}<br />has {votesCount} votes
      </p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={next}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>

      {anecdotes[maxKey]} has {maxNumber} votes

      <p></p>
    </>
  );
};

export default App;
