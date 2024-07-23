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
    aboutyourself: ''
  });

  const [educations, setEducations] = useState([{
    id: Date.now(),
    institute: '',
    title: '',
    startYear: '',
    gradYear: ''
  }]);

  const [experiences, setExperiencs] = useState([{
    id: Date.now(),
    company: '',
    position: '',
    startDate: '',
    endDate: '',
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
