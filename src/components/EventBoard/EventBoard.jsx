import css from './EventBoard.module.css'

export const EventBoard = ({ events }) => {
    console.log(events);
    return (
        <div className={css.EventBoard}>
            {events.map(event => (
                <div key={event.name}>{event.name}</div>
            ))}
        </div>
    );
}
