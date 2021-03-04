import React from 'react'
import pic from './Img/pic.jpg'




const Contact = () => {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-5">
                <div className="about-img">
                    <img src={pic} className="img-fluid rounded b-shadow-a" alt=""></img>
                </div>
            </div>
            <div className="col-sm-6 col-md-7">
                    {
                      Object.values([
                        {
                            infotype: 'Name',
                            value: 'Mihai Mataoanu'
                        },
                        {
                            infotype: 'Profile',
                            value: 'full stack developer'
                        },
                        {
                            infotype: 'Email',
                            value: 'mitzanu@hotmail.com'
                        },
                        {
                            infotype: 'Phone',
                            value: '+40 727 967 406'
                        }]).map(({infotype, value})=>{
                            
                            return <p key={infotype}> <span className="title-s">{infotype}:</span> <span>{value}</span></p>
                        })
                    }
            </div>
        </div>
    )
}

export default Contact
