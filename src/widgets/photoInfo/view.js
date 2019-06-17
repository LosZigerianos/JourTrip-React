import React from 'react';
import { Card } from 'react-bootstrap';
import Palette from 'react-palette';

// https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
const HEX_TRANSPARENCY_PERCENTAGE = '66'; // => 40%

const PhotoInfo = props => (
    <Card className="border-0">
        <Card.Img variant="top" src={props.url} alt={props.name} />
        <Palette image={props.url}>
            {palette => (
                <Card.ImgOverlay className="p-0 text-white font-weight-bold d-flex flex-column justify-content-end">
                    <div
                        className="p-3"
                        style={{
                            backgroundColor: palette.vibrant + HEX_TRANSPARENCY_PERCENTAGE,
                        }}
                    >
                        <Card.Title className="font-weight-bold">{props.name}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                    </div>
                </Card.ImgOverlay>
            )}
        </Palette>
    </Card>
);

PhotoInfo.defaultProps = {
    url: '',
    name: '',
    description: '',
};

export default PhotoInfo;
