const Course = ({course}) => {
  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
    </>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
      <Part part={props.parts[3].name} exercises={props.parts[3].exercises}/>
    </>
  )
}

const Total = ({parts}) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <b>Total of {total} exercises</b>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ]
  }

  return (
    <>
      <Course course={course} />
      <Total parts={course.parts}/>
    </>
  )
}

export default App
