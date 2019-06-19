import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Comment, Navbar, UserInfo, PhotoInfo } from '../../widgets';
import './style.css';

class Feed extends Component {
    constructor(props) {
        super(props);
        props.initFeedList();
    }
    render() {
        const { list, isFetching, user } = this.props;
        return (
            <>
                <Navbar />
                <Container className="mx-xs-0 px-xs-0">
                    <Row className="mx-md-5">
                        <Col xs="12" md="8" className="m-0 p-0">
                            {isFetching ? (
                                <p className="text-center">Loading....</p>
                            ) : list.length > 0 ? (
                                list.map(comment => (
                                    <Comment
                                        key={comment._id}
                                        details={comment}
                                        containerClassName="mb-3 mb-md-5"
                                        renderUser={() => (
                                            <UserInfo
                                                name={comment.user.fullname}
                                                photoSrc={comment.user.photo}
                                            />
                                        )}
                                        renderPhoto={() => (
                                            <PhotoInfo
                                                url={comment.location.photos[0]}
                                                name={comment.location.name}
                                                description={comment.location.city}
                                            />
                                        )}
                                    />
                                ))
                            ) : (
                                <p className="lead">
                                    Your friends have not yet commented on their favorite places :(
                                </p>
                            )}
                        </Col>
                        <Col md="3" className="d-none d-lg-block col-fixed">
                            <p>
                                <UserInfo
                                    name={user.fullname}
                                    photoWidth="50"
                                    photoHeight="50"
                                    photoSrc={user.photo}
                                />
                            </p>
                            {/* <p>Near locations list</p> */}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

Feed.defaultProps = {
    user: {},
    list: [],
    isFetching: false,
};

export default Feed;
