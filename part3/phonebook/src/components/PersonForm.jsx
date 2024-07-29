const PersonsForm = ({formHandler, newName, newPhone, newNameHandler, newPhoneHandler}) => {
    return (
        <form onSubmit={formHandler}>
            <div>name: <input value={newName} onChange={newNameHandler}/></div>
            <div>number: <input value={newPhone} onChange={newPhoneHandler} /></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}

export default PersonsForm;
