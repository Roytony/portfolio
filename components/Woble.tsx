import { MeshDistortMaterial } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const Woble = () => {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <sphereBufferGeometry />
        <MeshDistortMaterial
          color={'#B721FF'}
          attach="material"
          distort={0.6}
          speed={10}
        />
      </mesh>
    </Canvas>
  )
}

export default Woble
