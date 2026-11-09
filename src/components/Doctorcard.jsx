
function Doctorcard({name,age,specialization,gender}) {
  return (
    <div>
        <div>
        <img src="https://cdn-icons-png.flaticon.com/512/387/387561.png" alt="" />
        </div>
        <h1>{name}</h1>
        <p>{age}</p>
        <p>{specialization}</p>
        <p>{gender}</p>
        <button>view details</button>
    </div>
  )
}

export default Doctorcard