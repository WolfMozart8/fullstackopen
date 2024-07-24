import { useState } from 'react'

const Button = ({text, handler}) => <button onClick={handler}>{text}</button>

const Display = ({text, count}) => {
  if (text === "positive") return (<div>{text} {count} %</div>)
  else return (<div>{text} {count}</div>)
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const goodHandler = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    getStatics(updatedGood, neutral, bad)
  }
  const neutralHandler = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    getStatics(good, updatedNeutral, bad)
  }
  const badHandler = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    getStatics(good, neutral, updatedBad)
  }

  const getStatics = (good, neutral, bad) => {
    const newAll = good + neutral + bad
    setAll(newAll)
    setAverage((good - bad) / newAll) // exclude neutral (sum 0)
    setPositive(good / newAll * 100)
  }

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

      <Display text="all" count={all}/>
      <Display text="average" count={average}/>
      <Display text="positive" count={positive}/>
    </>
  )
}

export default App
