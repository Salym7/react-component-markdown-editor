import PropTypes from 'prop-types';

const Title = (props) => {

    return (
        <>
            <h2>{props.text}</h2>
        </>
    );
}

Title.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Title