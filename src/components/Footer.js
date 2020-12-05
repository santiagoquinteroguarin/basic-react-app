import React from 'react';

const Footer = (props) => {

    const { dateYear } = props;

    return (
        <footer>
            <h4>By 🎭 Santiago Quintero Guarin &copy; {dateYear}</h4>
        </footer>
    );
}

export default Footer;