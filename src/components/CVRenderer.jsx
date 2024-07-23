function CVRenderer({ basicInfo, educations, experiences }) {
    return (
        <>
            <div>
                <h2>{basicInfo.name}</h2>
                <h3>{basicInfo.email}</h3>
                <h3>{basicInfo.phone}</h3>
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
        </>
    );
}

export default CVRenderer;