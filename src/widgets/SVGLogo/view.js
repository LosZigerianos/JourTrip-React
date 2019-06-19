import React from 'react';

const SVGLogo = props => (
    <svg
        width={props.width}
        height={props.height}
        viewBox="0 0 223 61"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <title>{props.title}</title>
        <desc>Created with Sketch.</desc>
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Logo" transform="translate(-30.000000, -124.000000)">
                <g id="JourTrip">
                    <rect id="Rectangle" x="0" y="0" width="277" height="304" rx="2" />
                    <text
                        id="JourTrip"
                        fontFamily="Bukhari Script"
                        fontSize="54.22"
                        fontheight="normal"
                        fill={props.fillText}
                    >
                        <tspan x="32.4999" y="169">
                            JourTrip
                        </tspan>
                    </text>
                </g>
            </g>
        </g>
    </svg>
);

SVGLogo.defaultProps = {
    fillText: '#5A6174',
    width: 223,
    height: 61,
    title: 'JourTrip',
};

export default SVGLogo;
