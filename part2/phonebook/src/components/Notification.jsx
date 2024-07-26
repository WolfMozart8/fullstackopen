const Notification = ({message}) => {
    if (message === null) {
        return null
    }

    return (
        <div className="message-add">
            {message}
        </div>
    )
}

export default Notification
