import React from 'react'
import { UilPlus } from '@iconscout/react-unicons';
import "./Popup.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            
                <div className="close-btn" onClick={() => props.setTrigger(false)}><UilPlus color="gray" size="40"/></div>
                
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup