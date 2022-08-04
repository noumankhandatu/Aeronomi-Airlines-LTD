import React from 'react'
// Import TeamCard
import TeamCard from '../Common/Team/TeamCard'
// Import TeamData
import {TeamData} from '../Common/Team/TeamData'
// Import Pagination
import Pagination from '../Common/Pagination'

const TeamCards = () => {
    return (
        <>
            <section id="team_area">
                <div className="container">
                    <div className="row">
                        {TeamData.map((data, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                                <TeamCard img={data.img} para={data.para} name={data.name}
                                          des={data.des}/>
                            </div>
                        ))}

                        <div className="col-lg-12 col-md-12">
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamCards
