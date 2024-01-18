import React from 'react'
import WorkItem from './WorkItem'

const data = [ 
    {
        year: 2023,
        title: 'Technical Assistant',
        duration: 'Ongoing',
        details: "Working as a Technical Assistant at DCA, CUSAT."
    },
    {
        year: 2023,
        title: 'Jr.Software developer',
        duration: '6 Months',
        details: "Worked as a junior developer at perfit technologies pvt. ltd."
    },
    {
        year: 2023,
        title: 'MCA',
        duration: '2 Years',
        details: "Graduated from Cochin University of Science and Technology (CUSAT) with a Master's degree in Computer Applications."
    },
    {
        year: 2020,
        title: 'Bsc Cs',
        duration: '3 Years',
        details: "Graduated from Mary Matha Arts and Science College, affiliated to Kannur University, with a Bachelor's degree in Computer Science."
    },
   
];
function Work() {
    return (
        <div id='work' className='max-w-[1040px] margin-auto md:pl-20 p-4 py-16 '>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] '>Work</h1>
            {data.map((item, idx) => (
                <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
            ))}
        </div>
    );
}

export default Work
