import { useState } from "react";

function Experience({ experiences, setExperiencs }) {
    const handleInputChange = (event, id) => {
        const { name, value, type, checked } = event.target;
        setExperiencs(experiences.map(exp =>
            exp.id === id ? {
                ...exp,
                [name]: (type === 'checkbox' ? checked : value)
            } : exp));
    };

    const handleAddExp = () => {
        setExperiencs([...experiences, {
            id: Date.now(),
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            responsibilities: ''
        }]);
    };

    const handleRemoveExp = (id) => {
        setExperiencs(experiences.filter(exp => exp.id != id));
    };

    return (
        <>
            <h3>Experiences</h3>
            {experiences.map((exp) => (
                <form key={exp.id}>
                    <button type="button" onClick={() => handleRemoveExp(exp.id)}>x</button>
                    <div>
                        <label htmlFor={`company-${exp.id}`}><span>Company Name</span></label>
                        <input
                            type="text"
                            name="company"
                            id={`company-${exp.id}`}
                            value={exp.company}
                            onChange={(event) => handleInputChange(event, exp.id)}
                        />
                    </div>
                    <div>
                        <label htmlFor={`location-${exp.id}`}><span>Location</span></label>
                        <input
                            type="text"
                            name="location"
                            id={`location-${exp.id}`}
                            value={exp.location}
                            onChange={(event) => handleInputChange(exp.id, event)}
                        />
                    </div>
                    <div>
                        <label htmlFor="position"><span>Position Title</span></label>
                        <input
                            type="text"
                            name="position"
                            id="position"
                            value={exp.position}
                            onChange={(event) => handleInputChange(exp.id, event)}
                        />
                    </div>
                    <div >
                        <label htmlFor={`start-date-${exp.id}`}><span>Start Date</span></label>
                        <input
                            type="date"
                            name="startDate"
                            id={`start-date-${exp.id}`}
                            value={exp.startDate}
                            onChange={(event) => handleInputChange(event, exp.id)}
                        />
                    </div>
                    <div >
                        <label htmlFor={`end-date-${exp.id}`}><span>End Date</span></label>
                        <input
                            type="date"
                            name="endDate"
                            id={`end-date-${exp.id}`}
                            value={exp.endDate}
                            onChange={(event) => handleInputChange(event, exp.id)}
                            disabled={exp.isStillWorking}
                        />
                    </div>
                    <div >
                        <label htmlFor={`isStillWorking-${exp.id}`}><span>Still working? </span></label>
                        <input
                            type="checkbox"
                            name="isStillWorking"
                            id={`isStillWorking-${exp.id}`}
                            checked={exp.isStillWorking}
                            onChange={(event) => handleInputChange(event, exp.id)}
                        />
                    </div>
                    <div>
                        <label htmlFor={`responsibilities-${exp.id}`}><span>Responsibilities</span></label>
                        <textarea
                            name="responsibilities"
                            id={`responsibilities-${exp.id}`}
                            rows="6" cols="50"
                            value={exp.responsibilities}
                            onChange={(event) => handleInputChange(event, exp.id)}
                        />
                    </div>
                </form>
            ))}
            <button onClick={handleAddExp}>Add Experience</button>
        </>
    );
}

export default Experience;