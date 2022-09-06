
import React, { useRef } from 'react'
import {
  PerspectiveCamera,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Model  } from './House'



const Plane = () => {
  return (
    <Canvas camera={{position:[0,0,10]}}>
      {/*<PerspectiveCamera makeDefault position={[15, 80,0]} />*/}
      <pointLight color={'yellow'} intensity={1} position={[0, 10, 0]} />
      <ambientLight />
      <Model />
    </Canvas>
  )
}

export default Plane
