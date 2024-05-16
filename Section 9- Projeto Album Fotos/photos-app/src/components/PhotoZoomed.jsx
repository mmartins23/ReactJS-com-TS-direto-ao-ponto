const PhotoZoomed = ({ photo, setPhotoZoomed }) => {
  return (
    <div className="photo-zoomed-backdrop" onClick={() => setPhotoZoomed(null)}>
      <div className="photo-zoomed-container">
        <img src={photo.urls.regular} alt={photo.alt_description} />
      </div>
    </div>
  )
}

export default PhotoZoomed