import React from 'react'

function Photo(props) {

  const [isBig, setIsBig] = React.useState(false)

  function handleClick() {
    setIsBig(!isBig)
  }

  const style = isBig ? "clicked-photo" : "photo"

  const containerStyle = isBig && "clicked-photo-container"

  if (props.checkLocation === "All" && props.checkStudent === "All") {
    return <div 
              className={containerStyle} 
              onClick={handleClick}>
                  <img
                    src={props.picture}
                    className={style} 
                    onClick={handleClick}
                  />
                  <div className="caption">{props.caption}</div>
            </div>
  }
  else if (props.checkLocation === "All" && props.students.includes(props.checkStudent)) {
    return <div 
              className={containerStyle} 
              onClick={handleClick}>
                <div 
                  style={{ backgroundImage: `url(${props.picture})` }}
                  className={style} 
                  onClick={handleClick}>
                </div>
            </div>
  }
  else if (props.checkLocation === props.location && props.checkStudent === "All") {
    return <div 
              className={containerStyle} 
              onClick={handleClick}>
                <div 
                  style={{ backgroundImage: `url(${props.picture})` }}
                  className={style} 
                  onClick={handleClick}>
                </div>
            </div>
  }
  else if (props.checkLocation === props.location && props.students.includes(props.checkStudent)) {
    return <div 
              className={containerStyle} 
              onClick={handleClick}>
                <div 
                  style={{ backgroundImage: `url(${props.picture})` }}
                  className={style} 
                  onClick={handleClick}>
                </div>
            </div>
  }
}

export default Photo