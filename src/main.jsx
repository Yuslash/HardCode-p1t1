import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Create the root for your WebGL canvas
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

createRoot(document.getElementById('webgl')).render(
  <Canvas
    shadows
    camera={{ fov: 35, near: 0.1, far: 200, position: [3, -0.2, 0] }}
    gl={{ clearColor: 'lightblue' }}
  >
    <Experience />
  </Canvas>
)

// import Portfolio from './Portfolio.jsx'

// createRoot(document.getElementById('portfolio')).render(
//   <StrictMode>
//     <Portfolio />
//   </StrictMode>,
// )
