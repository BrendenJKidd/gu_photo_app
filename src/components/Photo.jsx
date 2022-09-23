import React from 'react'

function Photo(props) {

  const [isBig, setIsBig] = React.useState(false)

  function handleClick() {
    setIsBig(!isBig)
  }

  const style = isBig ? "clicked-photo" : "photo"

  const containerStyle = isBig && "clicked-photo-container"

  if (props.checkLocation === "All" && props.checkStudent === "All") {
    return <>
              <div>
                  <img
                    src={props.picture}
                    className="photo" 
                    onClick={handleClick}
                  />
                  <div className="caption-container">
                    <div className="caption">{props.caption}</div>
                  </div>
              </div>
                  {isBig && 
                    <div 
                      className='clicked-photo-container'
                      onClick={handleClick}>
                      <img 
                          src={props.picture} 
                          className="clicked-photo" 
                          onClick={handleClick}
                      />
                    </div>}
          </>
  }
  else if (props.checkLocation === "All" && props.students.includes(props.checkStudent)) {
    return <div 
              className={containerStyle} 
              onClick={handleClick}>
                  <img
                    src={props.picture}
                    className={style} 
                    onClick={handleClick}
                  />
                  <div className="caption-container">
                    <div className="caption">{props.caption}</div>
                  </div>
            </div>
  }
  else if (props.checkLocation === props.location && props.checkStudent === "All") {
    return <div 
              className={containerStyle} 
              onClick={handleClick}>
                  <img
                    src={props.picture}
                    className={style} 
                    onClick={handleClick}
                  />
                  <div className="caption-container">
                    <div className="caption">{props.caption}</div>
                  </div>
            </div>
  }
  else if (props.checkLocation === props.location && props.students.includes(props.checkStudent)) {
    return <div 
              className={containerStyle} 
              onClick={handleClick}>
                  <img
                    src={props.picture}
                    className={style} 
                    onClick={handleClick}
                  />
                  <div className="caption-container">
                    <div className="caption">{props.caption}</div>
                  </div>
            </div>
  }
}

export default Photo