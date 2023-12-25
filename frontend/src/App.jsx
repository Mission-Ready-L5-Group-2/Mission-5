//React Router Imports
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//Page Imports
import Home, { propertiesLoader } from './pages/farhan/Home'
import RootLayout from './sharedcomponents/RootLayout';
import Properties from './pages/farhan/Properties';









const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
      <Route 
      index 
      element={<Home />} 
      loader={propertiesLoader}
      />
      <Route 
      path="search" 
      element={ <Properties/>}/>
      <Route path='search/:city' element={<Properties/>} />
        
      
    
    </Route>
  )

)



function App() {

    return <RouterProvider router={router} />;
  
}

export default App