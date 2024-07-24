function CVRenderer({ basicInfo, educations, experiences, newSections }) {
    return (
        <>
            <div>
                <h1>{basicInfo.name}</h1>
                <p>{basicInfo.email}</p>
                <p>{basicInfo.phone}</p>
                <p>{basicInfo.address}</p>
            </div>
            <hr />
            <div>
                <h4>Summary</h4>
                <p>{basicInfo.aboutyourself}</p>
            </div>
            <div>
                <h4>Education</h4>
                {educations.map(edu => (
                    <div key={edu.id}>
                        <p>{edu.institute}</p>
                        <p>{edu.title}</p>
                        <p>{`${edu.startYear} ${edu.gradYear}`}</p>
                    </div>
                ))}
            </div>
            <div>
                <h4>Experience</h4>
                {experiences.map(exp => (
                    <div key={exp.id}>
                        <p>{exp.company}</p>
                        <p>{exp.title}</p>
                        <p>{`${exp.startDate} ${exp.endDate}`}</p>
                        <p>{exp.responsibilities}</p>
                    </div>
                ))}
            </div>
            {newSections.map(section => (
                <div key={section.id}>
                    <h4>{section.heading}</h4>
                    <p>{section.description}</p>
                </div>
            ))}

        </>
    );
}

export default CVRenderer;