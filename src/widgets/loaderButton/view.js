import React from 'react';
import Button from 'react-bootstrap/Button';

const LoaderButton = ({loading, ...props}) => {
    return (
        <Button disabled={loading} {...props}>
            {loading ? 'LOADING...' : props.children}
        </Button>
    );
};

LoaderButton.defaultProps = {
    loading: false,
};

export default LoaderButton;
