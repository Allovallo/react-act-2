import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { iconSize } from 'components/constants';
import { formatEventStart, formatEventDuration } from 'utils';

import { Card } from './Event.styled';
import { EventName } from './Event.styled';

import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)

    console.log(css);
    console.log(css[type]);

    return (
        <Card>
            <EventName>{name}</EventName>
            <p className={css.info}>
                <FaMapMarkerAlt className={css.icon} size={iconSize.md} />
                {location}
            </p>
            <p className={css.info}>
                <FaUserAlt className={css.icon} size={iconSize.md} />
                {speaker}
            </p>
            <p className={css.info}>
                <FaCalendarAlt className={css.icon} size={iconSize.md} />
                {formattedStart}
            </p>
            <p className={css.info}>
                <FaClock className={css.icon} size={iconSize.md} />
                {duration}
            </p>
            <span className={`${css.chip} ${css[type]}`}>{type}</span>
        </Card>
    );
};

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}
