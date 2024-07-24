import { useState } from 'react'
import './App.css'
import BasicInformation from './components/BasicInformation'
import Education from './components/Education'
import Experience from './components/Experience'
import CVRenderer from './components/CVRenderer'

function App() {
  const [basicInfo, setBasicInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    aboutyourself: ''
  });

  const [educations, setEducations] = useState([{
    id: Date.now(),
    institute: '',
    location: '',
    title: '',
    startYear: '',
    gradYear: ''
  }]);

  const [experiences, setExperiencs] = useState([{
    id: Date.now(),
    company: '',
    location: '',
    position: '',
    startDate: '',
    endDate: '',
    isStillWorking: false,
    responsibilities: ''
}]);

  return (
    <>
      <div className="container">
        <div className="form-container">
          <BasicInformation basicInfo={basicInfo} setBasicInfo={setBasicInfo}/>
          <Education educations={educations} setEducations={setEducations} />
          <Experience experiences={experiences} setExperiencs={setExperiencs}/>

        </div>
        <div className="cv-container">
          <CVRenderer basicInfo={basicInfo} educations={educations} experiences={experiences}/>
        </div>
      </div>
    </>
  )
}

export default App
