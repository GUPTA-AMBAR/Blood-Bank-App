import React from 'react'

const Spinner = () => {
    return (
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <p className="placeholder-glow text-center">
                <span className="placeholder col-12"></span>
            </p>

            {[...Array(6)].map((_, index) => (
                <p key={index} className="placeholder-wave text-center w-100">
                    <span className="placeholder col-12"></span>
                </p>
            ))}
        </div>


    )
}

export default Spinner