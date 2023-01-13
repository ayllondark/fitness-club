import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';


const Programs = () => {
  return (
    <div className='programs' id='programs'>
        {/* inicio Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore nuestros</span>
            <span>Programas</span>
            <span className='stroke-text'>para formarse</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category" key={program.heading}>
                   {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Únete ahora</span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            ))}
        </div>
        {/* fin Header */}
    </div>
  )
}

export default Programs