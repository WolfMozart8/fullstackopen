const Person = ({person}) => {
    return (
        <div key={person.id}>{person.name} {person.phone}</div>
    )
}

export default Person;
