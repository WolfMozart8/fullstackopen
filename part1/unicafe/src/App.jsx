import { useState } from 'react'

const Button = ({text, handler}) => <button onClick={handler}>{text}</button>

const StaticLine = ({text, value}) => {
  if (text === "positive") return (<div>{text} {value} %</div>)
  else return (<div>{text} {value}</div>)
}

const Statistics = (props) => {
  const isNoFeedback = props.good === 0 && props.neutral === 0 && props.bad === 0

  if (isNoFeedback){
    return <p>No feedback given</p>
  }

  else {
    return (
      <>
        <StaticLine text="good" value={props.good}/>
        <StaticLine text="neutral" value={props.neutral}/>
        <StaticLine text="bad" value={props.bad}/>

        <StaticLine text="all" value={props.all}/>
        <StaticLine text="average" value={props.average}/>
        <StaticLine text="positive" value={props.positive}/>
      </>
    )
  }
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
