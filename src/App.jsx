import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { getUniversitiesInCountry } from './services/UniversityService'
import handleApiError from './utils/handleApiError'
import { Success } from './components/common/toast';
import Home from './pages/Home/Home';

function App() {
  


  return (
    <>
      <Toaster />
      <Home />
    </>
  )
}

export default App
