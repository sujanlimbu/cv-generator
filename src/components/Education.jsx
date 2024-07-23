function Education({educations, setEducations}) {
    const handleInputChange = (id, event) => {
        const { name, value } = event.target;
        setEducations(educations.map(edu => (edu.id === id ? { ...edu, [name]: value } : edu)));
    };

    const handleAddEducation = () => {
        setEducations([...educations, {
            id: Date.now(),
            institute: '',
            title: '',
            startYear: '',
            gradYear: ''
        }]);
    };

    const handleDeleteEducation = (id) => {
        setEducations(educations.filter(edu => edu.id != id));
    }

    return (
        <>
            <h3>Educational Background</h3>
            {educations.map((edu) => (
                <form key={edu.id}>
                    <button type="button" onClick={() => handleDeleteEducation(edu.id)}>x</button>
                    <div>
                        <label htmlFor={`institute-${edu.id}`}><span>College/University</span></label>
                        <input
                            type="text"
                            name="institute"
                            id={`institute-${edu.id}`}
                            value={edu.institute}
                            onChange={(event) => handleInputChange(edu.id, event)}
                        />
                    </div>
                    <div>
                        <label htmlFor={`title-${edu.id}`}><span>Title of Study</span></label>
                        <input
                            type="text"
                            name="title"
                            id={`title-${edu.id}`}
                            value={edu.title}
                            onChange={(event) => handleInputChange(edu.id, event)}
                        />
                    </div>
                    <div >
                        <label htmlFor={`start-year-${edu.id}`}><span>Started Year</span></label>
                        <input
                            type="number"
                            name="startYear"
                            id={`start-year-${edu.id}`}
                            value={edu.startYear}
                            onChange={(event) => handleInputChange(edu.id, event)}
                        />
                    </div>
                    <div >
                        <label htmlFor={`gradYear-${edu.id}`}><span>Graduated On/By</span></label>
                        <input
                            type="number"
                            name="gradYear"
                            id={`gradYear-${edu.id}`}
                            value={edu.gradYear}
                            onChange={(event) => handleInputChange(edu.id, event)}
                        />
                    </div>
                </form>
            ))}
            <button onClick={handleAddEducation}>Add Education</button>
        </>
    );
}

export default Education;