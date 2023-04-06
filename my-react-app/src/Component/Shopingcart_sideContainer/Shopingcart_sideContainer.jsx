import React from 'react';
import Singledatacard from '../Singledatacard/Singledatacard';

const Shopingcart_sideContainer = (props) => {
    return (
        <div>
            <div className="card_container">
<Singledatacard {...props}></Singledatacard>
            </div>
            <div className="sidebar_contaienr"></div>
        </div>
    );
};

export default Shopingcart_sideContainer;