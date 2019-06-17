import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Comment, Navbar, UserInfo, PhotoInfo } from '../../widgets';
import './style.css';

const TIMELINE_COMMENTS = [
    {
        _id: 1,
        description:
            'Sadipscing nonumy ut eirmod gubergren labore sed. Aliquyam  gubergren voluptua gubergren et ipsum duo ipsum. Nonumy lorem rebum et consetetur.',
        creation_date: '2019-06-17T05:11:25.429Z',
        user: {
            fullname: 'Alfred Olsen',
            photo: 'https://randomuser.me/api/portraits/men/91.jpg',
        },
        location: {
            photos: [
                'https://fastly.4sqi.net/img/general/1181x1200/whO3fI_0m6MPxUv3iVQJlOg24ZpXFNBAk1WndoJfjOs.jpg',
            ],
            name: 'Chinese Food',
            city: 'La Serena',
        },
    },
    {
        _id: 2,
        description:
            'Sadipscing nonumy ut eirmod gubergren labore sed. Aliquyam  gubergren voluptua gubergren et ipsum duo ipsum. Nonumy lorem rebum et consetetur.',
        creation_date: '2019-05-31T22:42:22.273Z',
        user: {
            fullname: 'Meral Grüner',
            photo: 'https://randomuser.me/api/portraits/women/88.jpg',
        },
        location: {
            photos: [
                'https://fastly.4sqi.net/img/general/960x540/61204129_5g_spgrsgqi9QDr_6SIpWmgkMZFnGgEQi6JWl1fretE.jpg',
            ],
            name: 'Chinese Food',
            city: 'La Serena',
        },
    },
    {
        _id: 3,
        description:
            'Sadipscing nonumy ut eirmod gubergren labore sed. Aliquyam  gubergren voluptua gubergren et ipsum duo ipsum. Nonumy lorem rebum et consetetur.',
        creation_date: '2019-05-31T22:42:22.273Z',
        user: {
            fullname: 'Borja Flores',
            photo: 'https://randomuser.me/api/portraits/men/31.jpg',
        },
        location: {
            photos: ['https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg'],
            name: 'Comida China',
            city: 'La Serena',
        },
    },
    {
        _id: 4,
        description:
            'Sadipscing nonumy ut eirmod gubergren labore sed. Aliquyam  gubergren voluptua gubergren et ipsum duo ipsum. Nonumy lorem rebum et consetetur.',
        creation_date: '2019-05-31T22:42:22.273Z',
        user: {
            fullname: 'Andrina Clement',
            photo: 'https://randomuser.me/api/portraits/women/77.jpg',
        },
        location: {
            photos: ['https://cdn.pixabay.com/photo/2016/10/22/20/34/wine-1761613_1280.jpg'],
        },
    },
    {
        _id: 5,
        description:
            'Sadipscing nonumy ut eirmod gubergren labore sed. Aliquyam  gubergren voluptua gubergren et ipsum duo ipsum. Nonumy lorem rebum et consetetur.',
        creation_date: '2019-05-31T22:42:22.273Z',
        user: {
            fullname: 'Magdalena Dupuis',
            photo: 'https://randomuser.me/api/portraits/women/45.jpg',
        },
        location: {
            photos: ['https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_1280.jpg'],
        },
    },
];

const Feed = () => (
    <>
        <Navbar />
        <Container className="mx-xs-0 px-xs-0">
            <Row className="mx-md-5">
                <Col xs="12" md="8" className="m-0 p-0">
                    {TIMELINE_COMMENTS.map(comment => (
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
                    ))}
                </Col>
                <Col md="3" className="d-none d-lg-block">
                    <p>
                        <UserInfo
                            name="User name connected"
                            photoWidth="50"
                            photoHeight="50"
                            photoSrc="https://randomuser.me/api/portraits/men/91.jpg"
                        />
                    </p>
                    <p>Near locations list</p>
                </Col>
            </Row>
        </Container>
    </>
);

export default Feed;
