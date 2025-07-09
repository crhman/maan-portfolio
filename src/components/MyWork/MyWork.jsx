import React from 'react';
import  './MyWork.css'
import mywork_data from '../../assets/mywork_data'; // Assuming you have a JSON file with your work data
import arrow_icon from '../../assets/arrow_icon.svg'; // Assuming you have an arrow icon for the "Show More" button

const MyWork = () => {
    return (
        <div id='work' className="my-work">
            <div className="my-work_title">
                <h1>My Work</h1>
                 <hr style={{width:"100%", height:"5px", backgroundColor:"#27C529", marginTop:"10px", marginBottom:"30px"}} />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => (
                    <div className="mywork-item" key={index}>
                        <img src={work.w_img} />

                        {/* <h2>{work.title}</h2>
                        <p>{work.description}</p>
                        <a href={work.link} target="_blank" rel="noopener noreferrer">View Project</a> */}
                    </div>
                ))}
            </div>
            <div className="mywork-showmore">
                <p>show more</p>
                {/* <img src={arrow_icon} alt="" /> */}
            </div>

        </div>
    );
}

export default MyWork;
