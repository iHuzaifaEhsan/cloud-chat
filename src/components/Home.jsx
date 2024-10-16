import {useState} from 'react'
import Hero from './Hero'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [value, setvalue] = useState("");
  const navigateTo = useNavigate();
  const handleJoinMeeting = () => {
    navigateTo(`/room/${value}`);
  }

  return (
    <>
      <Hero></Hero>
      <div className="container">
        <h1>Join Meeting</h1>
        <div>
          <input type="text" placeholder='Generate Meeting ID' value={value} onChange={(e) => setvalue(e.target.value)} />
          <button disabled={!value} onClick={handleJoinMeeting}>Join Meeting</button>
        </div>
      </div>
    </>
  )
}

export default Home