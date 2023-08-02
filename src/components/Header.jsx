import React from 'react';
import Logo from '../../public/NA-logo.png';

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img src={Logo} width="50%"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;