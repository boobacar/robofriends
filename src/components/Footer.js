import React from 'react';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div>
            <footer>
                <p style={{color: '#0ccac4'}}>
                © Boubacar FALL [{year}]
                </p>
            </footer>
        </div>
    );
    
}

export default Footer;