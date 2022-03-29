import { useNavigate } from "react-router-dom";


function Home () {
    const navigate = useNavigate();

function handleClick() {
  navigate("/home");
}

return(
  <button onClick={handleClick}>go home</button>
)
}

export default Home