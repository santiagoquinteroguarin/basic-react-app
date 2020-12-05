import React from 'react';

const Header = (props) => {

    const { titleHeader } = props;

    return (
        <header>
            <h1>{titleHeader}</h1>
        </header>
    );
}

export default Header;