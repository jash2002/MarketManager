import React from "react";

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-middle">


                <div className="container">
                    <div className="row">
                        <div className="footer col d-flex justify-content-around align-items-center">
                            <h6>Created By James, Jon, Raz, Owen, Matty, and Simon </h6>
                            <h6>&copy;{new Date().getFullYear()} COMP208 </h6>
                            
                        {/* <p className="text-xs-center">
                            
                        </p> */}
                    {/* </div> */}
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    
                </div>
            </div>

        </div>
    )
}

export default Footer;