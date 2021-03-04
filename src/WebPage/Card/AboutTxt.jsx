import React from 'react'




const AboutTxt = () => {

    const title = 'About me'

    const text1 = 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.'

    const text2 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet eos, asperiores magnam odio ut cumque adipisci obcaecati quae maiores harum iusto accusamus qui nam sint aut repudiandae incidunt quisquam!'
    
    const text3 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quis vitae nesciunt at, provident ipsum ab doloribus! Tempore, blanditiis vero excepturi necessitatibus, atque aspernatur cumque provident, fugiat error obcaecati eligendi?'


    return (
        <div className="pt-4 pt-md-0">
            <div className="title-box-2">
                <h5 className="title-left">{title}</h5>
            </div>
                <p className="lead">{text1}</p>
                <p className="lead">{text2}</p>
                <p className="lead">{text3}</p>
        </div>
    )
}

export default AboutTxt
