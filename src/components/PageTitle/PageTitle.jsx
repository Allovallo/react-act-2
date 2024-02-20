import PropTypes from 'prop-types';
import css from './PageTitle.module.css'
import { Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
    return <Title className={css.title}>{text}</Title>
}

PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}