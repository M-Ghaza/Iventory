import React from 'react';

const year = new Date().getFullYear();
export default function Footer(){

    return(
        <footer className="footers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <div className="text-center">
                            <p className="mb-0">copyright &copy; Divisi Product Management - {year}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}