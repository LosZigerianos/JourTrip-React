import React from 'react';
import Button from 'react-bootstrap/Button';

const LoaderButton = props => {
    return (
        <Button disabled={props.loading} {...props}>
            {props.loading ? 'LOADING...' : props.children}
        </Button>
    );
};

LoaderButton.defaultProps = {
    loading: false,
};

export default LoaderButton;
