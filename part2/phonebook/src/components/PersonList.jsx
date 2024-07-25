import Person from "./Person";

const PersonList = ({personList}) => {
    return (
        <>
            {personList.map(person => <Person person={person} />)}
        </>
    )
}

export default PersonList;
