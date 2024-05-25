import './App.css'
import { Canvas } from '@react-three/fiber'
import Model from './components/Three/MindHome';
import React, { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei'
import Light from './components/Three/Light';

function App() {

  return (
    <>

      <div className='min-h-screen bg-[#191919] text-[#d6d2ca] text-center uppercase'>
        <h1 className='text-5xl pt-20'>Mind Home</h1>
        <div className='px-48'>
        <Canvas colorManagement shadowMap camera={{ position: [-5, 4, 4], fov: 40 }}>
          <Light />
          <Suspense fallback={null}>
            <OrbitControls />
              <Model />
          </Suspense>
        </Canvas>
        </div>
        
        <div className='p-12'>
          <h2 className='text-base p-1'>Location: Chiang Rai, Thailand</h2>
          <h2 className='text-base p-1'>Building type: private house</h2>
          <h2 className='text-base p-1'>Area: 120 sq.m. | Year: 2022</h2>
          <h3 className='text-sm p-2'>Designed by Ferin Chowarun</h3>
        </div>
        <a className='text-l p-4 bg-[#191919] hover:bg-[#313131] outline outline-1 hover:outline-1 rounded-lg' href='https://www.canva.com/design/DAF-SOt7lj8/s2_FySH0izI92M2_Ue6Kaw/view?utm_content=DAF-SOt7lj8&utm_campaign=designshare&utm_medium=link&utm_source=editor'>See more my works</a>

      </div>
    </>
  )
}

export default App
