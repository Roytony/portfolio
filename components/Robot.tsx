import * as THREE from 'three'
import React, { useRef } from 'react'
import {
  OrthographicCamera,
  PerspectiveCamera,
  useGLTF,
} from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Canvas, useFrame } from '@react-three/fiber'

import { Model as HouseModel } from './House'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    Box001_mtl: THREE.MeshPhysicalMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/utility_robot.glb') as GLTFResult
  const ref = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    ref.current.position.y = ref.current.position.y + Math.sin(time * 4) / 100
  })
  return (
    <group {...props} dispose={null}>
      <group position={[0, 5, -60]} ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Box001_mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Box001_mtl}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/utility_robot.glb')

const Robot = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[20, 80, 350]} />
      <pointLight color={'yellow'} intensity={1} position={[0, 10, 0]} />
      <ambientLight />
      {/* <Model /> */}
      <HouseModel />
    </Canvas>
  )
}

export default Robot
