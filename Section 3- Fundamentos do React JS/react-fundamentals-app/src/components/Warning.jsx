const Warning = ({warning}) => {
    if(!warning) {
     return null
    }
  return (
    <div>
        <h2>Render null</h2>
        <p>Warning!</p>
    </div>
  )
}

export default Warning