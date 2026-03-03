const Event = ({ event, color = "" }) => {
    return (
        <div className={`Event ${color}`}>
            <h5>{event}</h5>
        </div>
    )
}
export default Event
