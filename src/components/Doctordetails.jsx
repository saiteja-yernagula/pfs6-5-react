import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
function Doctordetails() {
  let { id } = useParams()
  let [doctor, setDoctor] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);
  
  async function fetchdata() {
    let response=await axios.get('https://doctorapibackend.onrender.com/doctors')
    let finaldata = response.data.find((val) => val.id == id);
    setDoctor(finaldata);
  }
  
  return (
    <div>
      Doctordetails{id}
      {doctor && (
        <div>
          <h1>{doctor.name}</h1>
          <h1>{doctor.salary}</h1>
          <h1>{doctor.age}</h1>
          <h1>{doctor.gender}</h1>
          <h1>{doctor.specialization}</h1>
        </div>
      )}
    </div>
  );
}

export default Doctordetails;
