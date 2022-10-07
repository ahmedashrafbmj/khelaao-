import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import PersonalDetails from "./view/components/PersonalDetails/PersonalDetails";
import Participate from "./view/components/Khelaoo/Participate"
import OpponentPlayMatch from "./view/components/Khelaoo/OppoNentPlayMatch";
import JoinTeamAsPlayer from "./view/components/Khelaoo/JoinTeamAsPlayer";
import NeedPlayerForTeam from "./view/components/Khelaoo/NeedPlayerForTeam"
import AllClicks from "./view/components/AllClicks";
function App() {
  // const navigate  = useNavigate()
  return (
    // <BrowserRouter>
    
    // <Participate/>
    // <OpponentPlayMatch/>
    // <JoinTeamAsPlayer/>
    <>
          <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<AllClicks />}/>
            <Route path="/JoinTeamAsPlayer" element={<JoinTeamAsPlayer />} />
            <Route path="/OpponentPlayMatch" element={<OpponentPlayMatch />} />
            <Route path="/Participate" element={<Participate />} />
            <Route path="/NeedPlayerForTeam" element={<NeedPlayerForTeam />} />
          
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/live-score" element={<Livescore />} /> */}
        </Routes>
      </Router>

    {/* <NeedPlayerForTeam/> */}
    {/* <button>Need Player For Team</button> */}
    {/* navigate("/profile") */}
    
    </>

    // </BrowserRouter>
  );
}

export default App;
