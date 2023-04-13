import { useNavigate } from "react-router-dom"

export default function GoBack(){
    const navigate = useNavigate()
    return(
        <button onClick={()=> navigate('*')} className="go-back-button">Front Page</button>
    )
}