import { useLocation } from "react-router-dom"


function Properties() {

  const location = useLocation()
  const properties = location.state
 

  return (
   

<div>
  {properties.map((property) => (
    <div key={property.id}>
      <h1>{property.title}</h1>
      <h2>{property.location}</h2>
      <h3>{property.price}</h3>
      <h4>{property.description}</h4>
      <img src={property.image} alt={property.title} />
    </div>
  ))}
</div>

  )
}

export default Properties

