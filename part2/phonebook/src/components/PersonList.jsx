import Person from "./Person";

const PersonList = ({personList, deleteHandler}) => {
    return (
        <>
            {personList.map(person => <Person person={person} key={person.id} deleteHandler={deleteHandler} />)}
        </>
    )
}

export default PersonList;
