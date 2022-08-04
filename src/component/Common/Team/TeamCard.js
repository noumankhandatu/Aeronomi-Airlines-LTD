import React from 'react'
// TeamCard Area
const TeamCard = props => {
    return (
        <>
            <div className="team-member">
                <div className="team_inner">
                    <img src={props.img} className="img-responsive" alt="img_team"/>
                    <div className="team_text">
                        <p>{props.para}</p>
                        <ul>
                            <li><a href="#!"><i className="fab fa-facebook-f fa-2x"></i></a></li>
                            <li><a href="#!"><i className="fab fa-twitter fa-2x"></i></a></li>
                            <li><a href="#!"><i className="fab fa-linkedin fa-2x"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="team_name">
                    <h4>{props.name}</h4>
                    <p>{props.des}</p>
                </div>
            </div>
        </>
    )
}

export default TeamCard
