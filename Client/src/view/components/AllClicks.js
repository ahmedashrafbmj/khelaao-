import { useNavigate } from "react-router";

export default function AllClicks(){
    var data  = [
        {text:"Participate In Tournament"},
        {text:"Want to Play Match With opponent"},
        {text:"Need Player For Team"},
        {text:"Need Team To Join"}
    ]
    const navigate  = useNavigate()

    return(
        <>

      <button onClick={()=>{navigate("/JoinTeamAsPlayer")}}>Want to Play Match With opponent</button>
      <button onClick={()=>{navigate("/OpponentPlayMatch")}}>Need Player For Team</button>
      <button onClick={()=>{navigate("/Participate")}}>Need Player For Team</button>
      <button onClick={()=>{navigate("/NeedPlayerForTeam")}}>Need Player For Team</button>
        </>
    )
}