import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {

  const [properties, setProperties] = useState([]);

  async function getAllProperties () {
    try {
      const data = await axios.get('http://localhost:8080/test');
      setProperties(data.data);
      
    } catch (error) {
      console.log(error, "cannot fetch data")
      
    }
  }

  useEffect(() => {
    getAllProperties();

  },[])


  return (
   <>
   <p>Our Current Properties</p>

   {
    properties.map((property) => {
      return (
        <div key={property._id}>
          <hr></hr>
          <p>Add some more </p>
          <p>{property.address.street}</p>
          <p>{property.address.city}</p>
          <p>{property.price}</p>
          <p>{property.address.district}</p>
          <hr></hr>
        </div>
      )
    })
   }

   
   </>
  )
}

export default Home