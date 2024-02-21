import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { iconSize } from 'components/constants';
import { formatEventStart, formatEventDuration } from 'utils';

import { Card, EventName, Info, Chip } from './Event.styled';

import css from './Event.module.css';

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end)

    return (
        <Card>
            <EventName>{name}</EventName>
            <Info>
                <FaMapMarkerAlt className={css.icon} size={iconSize.md} />
                {location}
            </Info>
            <Info>
                <FaUserAlt className={css.icon} size={iconSize.md} />
                {speaker}
            </Info>
            <Info>
                <FaCalendarAlt className={css.icon} size={iconSize.md} />
                {formattedStart}
            </Info>
            <Info>
                <FaClock className={css.icon} size={iconSize.md} />
                {duration}
            </Info>
            <Chip eventType={type}>{type}</Chip>
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
