import {Event} from 'components/Event/Event'
import css from './EventBoard.module.css'

export const EventBoard = ({ events }) => {
    // console.log(events);
    return (
        <div className={css.eventBoard}>
            {events.map(event => (
                <Event key={event.name}></Event>
            ))}
        </div>
    );
}
