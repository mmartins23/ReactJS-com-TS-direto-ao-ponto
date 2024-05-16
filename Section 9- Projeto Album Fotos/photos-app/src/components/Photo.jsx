const Photo = ({ data, setPhotoZoomed }) => {
  return (
    <div className='photo' onClick={() => setPhotoZoomed(data)}>
      <img src={data.urls.small} alt={data.alt_description} />
    </div>
  )
}

export default Photo