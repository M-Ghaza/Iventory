import React, { useEffect, useState,Suspense } from 'react';
// import { useNavigate } from 'react-router-dom';
import './App.scss';
import SideBar from './shared/Sidebar';
import Navbar from './shared/Navbar';
import AppRoutes from './AppRoutes';
// import Index from './routes';
import { useLocation,useNavigate } from 'react-router-dom';
import Footer from './shared/Footer';


function App(props) {
  const [fullPage,setFullPage] = useState(false)
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    let dataLayout = sessionStorage.getItem('data-layout');
    // navigate('/login')
    const token = null;
        if(token){
            return navigate('/admin/login')
        }
    if(dataLayout){
      document.documentElement.setAttribute('data-layout',dataLayout)
    } 
    if(location.pathname === "/admin/login"){
      setFullPage(true);
      
    }else{
      setFullPage(false);
    }   
  },[setFullPage,location.pathname,navigate])

  function isFullPage(){
    if(location.pathname === "/admin/login"){
      return null
    }else{
      return(
        <>
        <header id="page-topbar">
            <Navbar />
        </header>
            <SideBar locations={location}/>
        </>
      )
    }
  }
    
  return (
    <div className="App" id="layout-wrapper">
      {isFullPage()}
      <div className="vertical-overlay"></div>
        <div className={!fullPage ? "main-content overflow-hidden": "auth-page-wrapper auth-bg-cover d-flex justify-content-center align-items-center min-vh-100"}>

            <div className={!fullPage ? "page-content": ""}>
                <div className={!fullPage ? "container-fluid bg-light px-4" :"container-fluid px-4" } style={{minHeight:680}}>
                  <Suspense>
                    <AppRoutes /> 
                    {/* <Index /> */}
                </Suspense>
                </div>
            </div>
            {
              !fullPage ? <Footer/> : null
            }
            
        </div>
      
    </div>
  );
}

export default App;
