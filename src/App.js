import { Routes, Route } from 'react-router-dom';
import React, { Component }  from 'react';
import './App.css';
import Home from './components/Home';
import Campaign from './components/Campaign';
import ErrorPage from './components/ErrorPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LogingPage';
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import AnonymousRoute from './components/AnonymousRoute'
import {CampContextProvider} from './contexts/CampContext'
import AllCampsPage from './pages/AllCampsPage';


function App() {
  return (
    <div className="App">
      
      <CampContextProvider>
      <Layout>
      
      <Routes>
    
       <Route path='/' element={<Home />} />
       <Route path='/campaigns' element={
                <PrivateRoute>
                  <AllCampsPage />
                </PrivateRoute>
              }
            />
  
       <Route path='/:id' element={
                <PrivateRoute>
                  <Campaign />
                </PrivateRoute>
              }
            />
       {/* <Route path='/new-campaign' element={<NewCampaign />} /> */}
       
       <Route path='/signup' element={
                <AnonymousRoute>
                  <SignupPage />
                </AnonymousRoute>
              }
            />
            
       <Route path='/login'
              element={
                <AnonymousRoute>
                  <LoginPage />
                </AnonymousRoute>
              }
            />
       <Route path='*' element={<ErrorPage />} />
  
       </Routes>
       </Layout>
      </CampContextProvider>
    
      
  
    </div>
  );
}

export default App;
