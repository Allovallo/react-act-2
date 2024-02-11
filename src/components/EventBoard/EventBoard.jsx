import css from './EventBoard.module.css'

export const EventBoard = ({ events }) => {
    console.log(events);
    return <div className={css.EventBoard}>Event cards</div>
}