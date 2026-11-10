import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Doctordetails() {
  let [doctor, setDoctor] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);

  function fetchdata() {
    let data = [
      {
        id: 1,
        name: "Teja",
        age: 26,
        gender: "Male",
        specialization: "Muscles",
        salary: 7000000,
      },

      {
        id: 2,
        name: "Sam",
        age: 26,
        gender: "Male",
        specialization: "Bones",
        salary: 4000000,
      },

      {
        id: 3,
        name: "Anu",
        age: 25,
        gender: "Female",
        specialization: "Heart",
        salary: 5000000,
      },
    ];

    let finaldata = data.find((val) => val.id == id);
    setDoctor(finaldata);
  }
  let { id } = useParams();
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
