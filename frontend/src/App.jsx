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


//Context Imports







const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
      <Route 
      index 
      element={<Home />} 
      loader={propertiesLoader}
      />
    
    </Route>
  )

)



function App() {

    return <RouterProvider router={router} />;
  
}

export default App