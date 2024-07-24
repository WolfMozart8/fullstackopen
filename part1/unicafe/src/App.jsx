import { useState } from 'react'

const Button = ({text, handler}) => <button onClick={handler}>{text}</button>

const Display = ({text, count}) => <div>{text} {count}</div>

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandler = () => {setGood(good + 1)}
  const neutralHandler = () => {setNeutral(neutral + 1)}
  const badHandler = () => {setBad(bad + 1)}

  return (
    <>
      <h1>give feedfack</h1>
      <Button handler={goodHandler} text="good"/>
      <Button handler={neutralHandler} text="neutral"/>
      <Button handler={badHandler} text="bad"/>
      <h1>statics</h1>
      <Display text="good" count={good}/>
      <Display text="neutral" count={neutral}/>
      <Display text="bad" count={bad}/>
    </>
  )
}

export default App
