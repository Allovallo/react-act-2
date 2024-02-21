import styled from '@emotion/styled'

export const Card = styled.div`
    position: relative;
    border: 2px dashed black;
    padding: 8px;
    border-radius: 4px;
`;

export const EventName = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`;

export const Info = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: var(--color-primary-text);
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;
`;

const setBgColor = (props) => {
    switch (props.eventType) {
        case 'free':
            return 'var(--color-green)';
        case 'paid':
            return 'var(--color-blue)';
        case 'vip':
            return 'var(--color-red)';
        default:
            return '#000';
        }
    }

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #000;
    color: #fff;
    background-color: ${setBgColor};
`;