import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Crayon_1_Crayon_0: THREE.Mesh
    Cube_Mat8_1: THREE.Mesh
    Cube_Mat91_1: THREE.Mesh
    post_it__rose_1_Mat6_0: THREE.Mesh
    post_it__rose_Mat3_0: THREE.Mesh
    post_it_jaune_Mat2_0: THREE.Mesh
    post_it_vert_Mat1_0: THREE.Mesh
    Ecran_d_Ecran_d_0: THREE.Mesh
    ['tasse_��_th��_1_tasse_��_th��_0']: THREE.Mesh
    Feuille_vierge_Mat_0: THREE.Mesh
    Tour_PC_1_Tour_PC_0: THREE.Mesh
    Fauteuil_de_bureau_1_Fauteuil_de_bureau_0: THREE.Mesh
    Clavier_Clavier_0: THREE.Mesh
    ['��cran_��cran_0']: THREE.Mesh
    classeur_rouge_Mat5_0: THREE.Mesh
    claseur_bleu_Mat4_0: THREE.Mesh
  }
  materials: {
    Crayon: THREE.MeshStandardMaterial
    ['Mat.8']: THREE.MeshStandardMaterial
    ['Mat.9.1']: THREE.MeshStandardMaterial
    ['Mat.6']: THREE.MeshStandardMaterial
    ['Mat.3']: THREE.MeshStandardMaterial
    ['Mat.2']: THREE.MeshStandardMaterial
    ['Mat.1']: THREE.MeshStandardMaterial
    Ecran_d: THREE.MeshStandardMaterial
    tasse__th: THREE.MeshStandardMaterial
    material: THREE.MeshStandardMaterial
    Tour_PC: THREE.MeshStandardMaterial
    Fauteuil_de_bureau: THREE.MeshStandardMaterial
    Clavier: THREE.MeshStandardMaterial
    cran: THREE.MeshStandardMaterial
    ['Mat.5']: THREE.MeshStandardMaterial
    ['Mat.4']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/my_virtual_desk.glb') as GLTFResult

  const ref = useRef<THREE.Group>(null!)

  useFrame(() => (ref.current.rotation.y += 0.01))

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-25.62, 78.67, -70.19]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Crayon_1_Crayon_0.geometry}
              material={materials.Crayon}
            />
          </group>
          <group position={[0, 75.57, -29.3]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Mat8_1.geometry}
              material={materials['Mat.8']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Mat91_1.geometry}
              material={materials['Mat.9.1']}
            />
          </group>
          <group position={[-24.62, 78.38, -134.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.post_it__rose_1_Mat6_0.geometry}
              material={materials['Mat.6']}
            />
          </group>
          <group position={[-24.62, 78.38, -126]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.post_it__rose_Mat3_0.geometry}
              material={materials['Mat.3']}
            />
          </group>
          <group position={[-24.62, 78.38, -117.77]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.post_it_jaune_Mat2_0.geometry}
              material={materials['Mat.2']}
            />
          </group>
          <group position={[-24.62, 78.38, -109.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.post_it_vert_Mat1_0.geometry}
              material={materials['Mat.1']}
            />
          </group>
          <group position={[9.46, 77.61, -38.8]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ecran_d_Ecran_d_0.geometry}
              material={materials.Ecran_d}
            />
          </group>
          <group position={[-12.6, 77.7, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['tasse_��_th��_1_tasse_��_th��_0'].geometry}
              material={materials.tasse__th}
            />
          </group>
          <group
            position={[-24.62, 78.38, -85.15]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Feuille_vierge_Mat_0.geometry}
              material={materials.material}
            />
          </group>
          <group position={[-3.93, 77.38, 44.52]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tour_PC_1_Tour_PC_0.geometry}
              material={materials.Tour_PC}
            />
          </group>
          <group
            position={[-75.61, 2.38, -42.56]}
            rotation={[Math.PI, 0, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.Fauteuil_de_bureau_1_Fauteuil_de_bureau_0.geometry
              }
              material={materials.Fauteuil_de_bureau}
            />
          </group>
          <group
            position={[-23.15, 78.93, -43.66]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <group position={[0, -0.65, 5.65]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Clavier_Clavier_0.geometry}
                material={materials.Clavier}
              />
            </group>
            <group position={[0, 0.65, -5.65]} rotation={[1.22, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['��cran_��cran_0'].geometry}
                material={materials.cran}
              />
            </group>
          </group>
          <group position={[-7.78, 77.7, 19.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.classeur_rouge_Mat5_0.geometry}
              material={materials['Mat.5']}
            />
          </group>
          <group position={[-7.78, 77.7, 26.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.claseur_bleu_Mat4_0.geometry}
              material={materials['Mat.4']}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/my_virtual_desk.glb')
