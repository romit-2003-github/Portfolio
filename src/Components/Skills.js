import React from 'react'

const Skills = () => {
    return (
        <div className='skillContainer'>
            <div className='skill'>
                <h1>My Skill Set</h1>
            </div>
            <div className="progressBar">
                <h3>HTML</h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:'80%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                </div>
            </div>

            <div className="progressBar">
                <h3>CSS</h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:'75%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">75%</div>
                </div>
            </div>

            <div className="progressBar">
                <h3>JavaScript</h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:'70%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
            </div>

            <div className="progressBar">
                <h3>BootStrap</h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:'60%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
            </div>

            <div className="progressBar">
                <h3>ReactJS</h3>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                </div>
            </div>


        </div>
    )
}

export default Skills
