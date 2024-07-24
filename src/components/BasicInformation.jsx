
function BasicInformation({ basicInfo, setBasicInfo }) {

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBasicInfo({ ...basicInfo, [name]: value });
    };

    return (
        <>
            <h3>Basic Information</h3>
            <form>
                <div>
                    <label htmlFor="name"><span>Fullname</span></label>
                    <input type="text" name="name" id="name" value={basicInfo.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="email"><span>Email</span></label>
                    <input type="email" name="email" id="email" value={basicInfo.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="phone"><span>Phone Number</span></label>
                    <input type="phone" name="phone" id="phone" value={basicInfo.phone} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="address"><span>Address</span></label>
                    <input type="text" name="address" id="address" value={basicInfo.address} onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="aboutyourself"><span>About Yourself</span></label>
                    <textarea
                        name="aboutyourself" 
                        id="aboutyourself" 
                        rows="6" cols="50" 
                        value={basicInfo.aboutyourself} 
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </>
    );
}

export default BasicInformation;