import React from "react";

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-middle">


                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-around align-items-center">
                            <h4>Created By James, Jon, Raz, Owen, Matty, and Simon</h4>
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} COMP208
                        </p>
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