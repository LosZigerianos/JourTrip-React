import React from 'react';
import Image from 'react-bootstrap/Image';

const UserInfo = props => (
    <>
        <Image
            roundedCircle
            width={props.photoWidth}
            height={props.photoHeight}
            src={props.photoSrc}
        />{' '}
        {props.name}
    </>
);

UserInfo.defaultProps = {
    photoWidth: '30',
    photoHeight: '30',
    photoSrc: 'https://randomuser.me/api/portraits/women/77.jpg',
    name: 'Andrina Clement'
};

export default UserInfo;
