import React from 'react'

const FullDetail = () => {
    return (
        <>
            <div className="mainDetail">
                <div className="DetailHeading">
                    <h1>About Me</h1>
                </div>
                <div className="containerFullDetail">
                    <div className="fullDetailpara">
                        <p>Hello folks, Welcome to my portfolio. Myself Romit Soni, currently a Second Year student at Thapar Institute of Engineering and Technology persuing B.Tech in Electronics & Communication with a Minor in CSE.</p>
                        <p>Hardwork and honesty are best two things that define me.</p>
                    </div>

                    <div className="Fullimage">
                        <img src={require('./Photo.png')} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FullDetail
