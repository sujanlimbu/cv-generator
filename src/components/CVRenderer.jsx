import '../css/CVRenderer.css';

function CVRenderer({ basicInfo, educations, experiences, newSections }) {
    return (
        <>
            <div className="cv-display-content">
                <div id='basic-info-div'>
                    <h1>{basicInfo.name}</h1>
                    <p>{basicInfo.address}</p>
                    <p>{basicInfo.email}{(basicInfo.phone) ? ", " : ""} {basicInfo.phone}</p>
                    <hr id='heading-hr' />
                </div>
                <div>
                    <h3>Summary</h3>
                    <p>{basicInfo.aboutyourself}</p>
                    <hr />
                </div>
                <div>
                    <h3>Education</h3>
                    {educations.map(edu => (
                        <div key={edu.id}>
                            <p>{edu.institute}{edu.location? `, ${edu.location}`: ``}</p>
                            <h4>{edu.title}</h4>
                            <p>{`${edu.startYear}-${edu.gradYear}`}</p>
                            <br />
                        </div>
                    ))}
                    <hr />
                </div>
                <div>
                    <h3>Experience</h3>
                    {experiences.map(exp => (
                        <div key={exp.id}>
                            <p>{exp.company}{exp.location ? `, ${exp.location}` : ""}
                                <h4>{exp.position}</h4>
                            </p>
                            <p>{exp.startDate} {exp.isStillWorking ? `and still working` : ` to ${exp.endDate}`}</p>
                            <p id='responsibilites-p'>{exp.responsibilities ? `Responsibilites: ` : ``}</p>
                            <p>{exp.responsibilities}</p>
                            <br />
                        </div>
                    ))}
                    <hr />
                </div>
                {newSections.map(section => (
                    <div key={section.id}>
                        <h3>{section.heading}</h3>
                        <p>{section.description}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    );
}

export default CVRenderer;