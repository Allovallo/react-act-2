import PropTypes from 'prop-types';

export const Event = ({ name, location, speaker, type, start, end }) => {
    return (<div className="event">
        <h2 className="title"></h2>
        <p className="info">
            <i className="icon"></i>
            Location
        </p>
        <p className="info">
            <i className="icon"></i>
            Speaker
        </p>
        <p className="info">
            <i className="icon"></i>
            Start Date
        </p>
        <p className="info">
            <i className="icon"></i>
            Duration
        </p>
        {/* <span className="chip free|paid|vip">Event type</span> */}
    </div>)
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}