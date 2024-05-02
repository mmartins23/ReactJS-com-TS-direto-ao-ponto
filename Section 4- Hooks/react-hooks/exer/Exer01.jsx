import { useEffect } from "react"

const Exer01 = ({userInfo}) => {

    useEffect(() => {
        document.title = `${userInfo.name} - ${userInfo.job}`
    })
     
  return (
    <div>
        <h2>Name: {userInfo.name}</h2>
        <h2>Job Role: {userInfo.job}</h2>
    </div>
  )
}

export default Exer01