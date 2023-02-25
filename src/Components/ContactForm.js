import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className="formContainer">
                <h1 className="formheading">Contact Me</h1>
                <div className="formDetails">
                    <div className="mb-3 py-3">
                        <label for="exampleFormControlInput1" className="form-label text-white">Name</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name here.."/>
                    </div>
                    <div className="mb-3 py-3">
                        <label for="exampleFormControlInput1" className="form-label text-white">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3 py-3">
                        <label for="exampleFormControlInput1" className="form-label text-white">Phone No</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="XXXXX-XXXXX"/>
                    </div>
                    <div className="mb-3 py-3">
                        <label for="exampleFormControlTextarea1" className="form-label text-white">Anything you want to specify..</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter text here"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary my-3">Submit</button>
                    <button type="button" className="btn btn-primary mx-3">Clear</button>
                </div>
                <div className="submit">

                </div>
            </div>
        </>
    )
}

export default ContactForm
