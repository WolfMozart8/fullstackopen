import { useState } from 'react'

const Button = ({text, handler}) => <button onClick={handler}>{text}</button>

const Display = ({text, count}) => {
  if (text === "positive") return (<div>{text} {count} %</div>)
  else return (<div>{text} {count}</div>)
}

const Statistics = (props) => {
  return (
    <>
      <Display text="good" count={props.good}/>
      <Display text="neutral" count={props.neutral}/>
      <Display text="bad" count={props.bad}/>

      <Display text="all" count={props.all}/>
      <Display text="average" count={props.average}/>
      <Display text="positive" count={props.positive}/>
    </>
  )
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
    getStatistics(updatedGood, neutral, bad)
  }
  const neutralHandler = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    getStatistics(good, updatedNeutral, bad)
  }
  const badHandler = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    getStatistics(good, neutral, updatedBad)
  }

  const getStatistics = (good, neutral, bad) => {
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


      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}

        all={all}
        average={average}
        positive={positive}
      />
    </>
  )
}

export default App
