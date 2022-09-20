function ShowPhotos(props) {
  return (
    <div className="show-photos-center">
      <button className="show-photos" onClick={props.toggle}>
        {props.isShown ? "Click to hide photos" : "Click to show photos!"}
      </button>
    </div>
  )
}

export default ShowPhotos