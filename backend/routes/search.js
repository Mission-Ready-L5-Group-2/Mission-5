// Used to search for properties
import { Router } from "express";
import { Property } from "../models/property.js";

const searchRouter = Router();

searchRouter.post("/", async (req, res) => {

  const search = req.body;
  console.log(search);

// Handle "Any" case for bedroom
const bedroomQuery = {};
if (search.bedroom !== "Any") {
  // Remove "+" sign at the end and parse as integer
  search.bedroom = parseInt(search.bedroom.replace(/\+$/, ''), 10);
  if (!isNaN(search.bedroom) && search.bedroom === 4) {
    // If the value is 4, show all bedrooms greater than 4
    bedroomQuery.bedrooms = { $gte: 4 };
  } else if (!isNaN(search.bedroom)) {
    // If it's a valid number, use it as is
    bedroomQuery.bedrooms = search.bedroom;
  }
}

// Handle "Any" case for bathroom
const bathroomQuery = {};
if (search.bathroom !== "Any") {
  // Remove "+" sign at the end and parse as integer
  search.bathroom = parseInt(search.bathroom.replace(/\+$/, ''), 10);
  if (!isNaN(search.bathroom) && search.bathroom === 4) {
    // If the value is 4, show all bathrooms greater than 4
    bathroomQuery.bathrooms = { $gte: 4 };
  } else if (!isNaN(search.bathroom)) {
    // If it's a valid number, use it as is
    bathroomQuery.bathrooms = search.bathroom;
  }
}

  
  const priceQuery = {};

if (search.price1 !== "Any") {
  // Remove dollar sign and parse as integer
  search.price1 = parseInt(search.price1.replace('$', ''), 10);
}

if (search.price2 !== "Any") {
  // Remove dollar sign and handle "500+" case
  search.price2 = search.price2.replace('$', '');
  if (search.price2.includes('+')) {
    // If the value contains "+", remove it and parse as integer
    search.price2 = parseInt(search.price2.replace('+', ''), 10);
  } else {
    // Otherwise, parse as integer directly
    search.price2 = parseInt(search.price2, 10);
  }
}


if (!isNaN(search.price1) && !isNaN(search.price2)) {
  // Both price1 and price2 are specific values
  priceQuery.price = { $gte: search.price1, $lte: search.price2 };
  console.log(priceQuery);
} else if (!isNaN(search.price1)) {
  // Only price1 is specific
  priceQuery.price = { $gte: search.price1 };
} else if (!isNaN(search.price2)) {
  // Only price2 is specific
  if (search.price2 === 500) {
    // If the value is 500, show all prices greater than 500
    priceQuery.price = { $gte: 500 };
  } else {
    // Otherwise, show all prices less than or equal to price2
    priceQuery.price = { $lte: search.price2 };
  }

}
  // If both price1 and price2 are 'Any', show all prices

  // Build the query
  const locationQuery = {};
  if (search.location !== "All Locations") {
    locationQuery["address.city"] = search.location;
  }
  
  const districtQuery = {};
  if (search.district && search.district.length > 0 && search.district[0] !== "All Districts") {
    districtQuery["address.district"] = { $in: search.district };
  }
  

  const suburbQuery = search.suburb[0] === "All Suburbs"
  ? {} // Empty query to match all suburbs
  : { "address.suburb": { $in: search.suburb } };


  const propertyTypeQuery = {};
    if (search.propertyType !== "Any") {
        propertyTypeQuery.propertyType = search.propertyType;
    }
  
  const query = {
    $and: [
      bedroomQuery,
      bathroomQuery,
      locationQuery,
    districtQuery,
     { "details.petsAllowed": search.petsOk },
        priceQuery,
        propertyTypeQuery,
        suburbQuery,      
    ],
  };

  console.log(query);


  try {
    const properties = await Property.find(query);
 
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default searchRouter;
