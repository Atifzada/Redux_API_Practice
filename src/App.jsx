import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { FetchData } from "./redux/Userslice";
function App() {
  const {user, isloading, error} = useSelector((state)=> state.users)
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(FetchData());
  }, [Dispatch]);
  console.log(user)
  return (
    <>
    <h1><span className="Status">Status</span>: {isloading} | <span className="Error">Error</span>: {error}</h1>
    <ul>
      {user.map((cur, ind)=>{
        return <div key={ind} className="container">
          <li>Name:{cur.name.first}{cur.name.last} <br /> 
          Email: {cur.email} <br /> 
          Gender: {cur.gender} <br />
          Location: {cur.location.country}
          <br />
           </li>
        </div>
      })}
    </ul>
    </>
  )
}

export default App
