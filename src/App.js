import React from 'react'
import Header from './components/Header'
import StartBanner from './components/StartBanner'
import ShowPhotos from './components/ShowPhotos'
import Photo from './components/Photo'
import data from './data'

function App() {

  const [location, setLocation] = React.useState('All')

  const [student, setStudent] = React.useState('All')

  const selectLocation = (e) => {
    setLocation(e.target.value)
  }

  const selectStudent = (e) => {
    setStudent(e.target.value)
  }

  const [isShown, setIsShown] = React.useState(false)

  function toggle() {
    setIsShown(prevShown => !prevShown)
  }

  const photos = data.map(item => {
    return (
      <Photo 
        key={item.id}
        picture={item.image}
        location={item.location}
        students={item.students}
        caption={item.caption}
        checkLocation={location}
        checkStudent={student}
      />
    )
  })

  return (
    <div>
      <Header 
      location={location}
      student={student}
      selectLocation={selectLocation}
      selectStudent={selectStudent}/>
      <StartBanner />
      <ShowPhotos
      className="show-photos"
      toggle={toggle}
      isShown={isShown}
      />
      {isShown && <div className="photo-array">
        {photos}
      </div>}
    </div>
  );
}

export default App;
