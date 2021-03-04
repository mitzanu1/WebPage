import React from 'react'





const Skills = () => {

    const title = 'Skill'

    return (
        <div className="skill-mf">
            <p className="title-s">{title}</p>
            {
                Object.values([
                {
                    skill: 'HTML',
                    value: '75%'
                },
                {
                    skill: 'Javascript',
                    value: '80%'
                },
                {
                    skill: 'React',
                    value: '70%'
                },
                {
                    skill: 'CSS',
                    value: '80%'
                }
            ]).map(({skill, value})=>{

                    return (
                        <div key={skill}>
                        <span>{skill}</span> <span className="pull-right">{value}</span>
                        <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width:value}} aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default Skills
