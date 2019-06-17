import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import './style.css';


const Comment = props => (
    <Card className={`border ${props.containerClassName}`}>
        {props.renderPhoto()}
        <Card.Body>
            <Card.Title>{props.renderUser()}</Card.Title>
            <Card.Text>{props.details.description}</Card.Text>
            <Card.Text className="text-right text-secondary">
                {moment(props.details.creation_date).fromNow()}
            </Card.Text>
        </Card.Body>
    </Card>
);

Comment.defaultProps = {
    details: {},
    containerClassName: '',
    renderUser: () => {},
    renderPhoto: () => {},
};

export default Comment;
