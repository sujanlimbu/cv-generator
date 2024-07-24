function NewSection({ newSections, setNewSections }) {

    const handleAddNewSection = () => {
        setNewSections([...newSections, {
            id: Date.now(),
            heading: '',
            description: ''
        }]);
    };

    const handleInputChange = (event, id) => {
        const { name, value } = event.target;
        setNewSections(newSections.map(section =>
            section.id === id ? {
                ...section,
                [name]: value
            }
                : section)
        );
    };

    const handleRemoveSection = (id) => {
        setNewSections(newSections.filter(section => section.id != id));
    };
    return (
        <>
            <div className="cv-input-container-content">
                <h3>Add new Custom Section</h3>
                <div className="cv-input-form-list">
                    {newSections.map(section => (
                        <form key={section.id} className="actual-form">
                            <button type="button" className="close-button" onClick={() => handleRemoveSection(section.id)}>+</button>
                            <div>
                                <label htmlFor={`heading-${section.id}`} ><span>Heading</span></label>
                                <input type="text"
                                    name="heading"
                                    id={`heading-${section.id}`}
                                    value={section.heading}
                                    onChange={(event => handleInputChange(event, section.id))}
                                    placeholder="Skills"
                                />
                            </div>
                            <div>
                                <label htmlFor={`description-${section.id}`}><span>Description</span></label>
                                <textarea
                                    name="description"
                                    id={`description-${section.id}`}
                                    rows="6" cols="50"
                                    value={section.description}
                                    onChange={(event => handleInputChange(event, section.id))}
                                />
                            </div>
                        </form>
                    ))}
                </div>
                <button className="add-button" type="button" onClick={handleAddNewSection}>Add New Section</button>
            </div>
        </>
    );
}

export default NewSection;