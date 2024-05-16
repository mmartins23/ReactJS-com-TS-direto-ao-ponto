import Photo from "./Photo"

const PhotoList = ({ photos, setPhotoZoomed }) => {
  return (
    <div className="album">
      {photos.map(photo => (
        <Photo key={photo.id} data={photo} setPhotoZoomed={setPhotoZoomed} />
      ))}
    </div>
  )
}

export default PhotoList