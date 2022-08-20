import React from 'react';

const Footer = ({list}) => {
    return (
        <footer>
            <h2 className="max-w-sm m-auto">
                Summary tasks: <strong>{list.length}</strong>
            </h2>
        </footer>
    );
};

export default Footer;