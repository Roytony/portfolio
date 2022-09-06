import * as THREE from "three";
import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three-stdlib";
import {useFrame} from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh;
        Object_33: THREE.Mesh;
        Object_21: THREE.Mesh;
        Object_3: THREE.Mesh;
        Object_5: THREE.Mesh;
        Object_6: THREE.Mesh;
        Object_7: THREE.Mesh;
        Object_8: THREE.Mesh;
        Object_9: THREE.Mesh;
        Object_10: THREE.Mesh;
        Object_11: THREE.Mesh;
        Object_12: THREE.Mesh;
        Object_13: THREE.Mesh;
        Object_14: THREE.Mesh;
        Object_15: THREE.Mesh;
        Object_16: THREE.Mesh;
        Object_17: THREE.Mesh;
        Object_18: THREE.Mesh;
        Object_19: THREE.Mesh;
        Object_20: THREE.Mesh;
        Object_22: THREE.Mesh;
        Object_23: THREE.Mesh;
        Object_24: THREE.Mesh;
        Object_25: THREE.Mesh;
        Object_26: THREE.Mesh;
        Object_27: THREE.Mesh;
        Object_28: THREE.Mesh;
        Object_29: THREE.Mesh;
        Object_30: THREE.Mesh;
        Object_31: THREE.Mesh;
        Object_32: THREE.Mesh;
    };
    materials: {
        transparentRed: THREE.MeshStandardMaterial;
        transparent: THREE.MeshStandardMaterial;
        ["DefaultWhite_panel.png"]: THREE.LineBasicMaterial;
        // ["DefaultWhite_panel.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_sides.png"]: THREE.MeshStandardMaterial;
        DefaultWhite: THREE.MeshStandardMaterial;
        ["DefaultWhite_adi.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_alt.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_aoa_indexer.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_asi.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_canvasTex.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_clock.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_cmd.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_egt.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_fflow.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_fuel.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_gmeter.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_interior.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_mfd.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_pitot.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_tac.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_throttle.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_uhf-box.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_revi.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_seat.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_vsi.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_warning.png"]: THREE.MeshStandardMaterial;
        ["DefaultWhite_yoke.png"]: THREE.MeshStandardMaterial;
    };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
    const {nodes, materials} = useGLTF(
        "/mcdonnell_douglas_t-45_goshawk.glb"
    ) as GLTFResult;

    const mesh = useRef<THREE.Group>(null!)

    useFrame(state => {
        const time = state.clock.getElapsedTime();
        mesh.current.position.y = mesh.current.position.y + Math.sin(time * 2) / 100;
        // mesh.current.rotation.y = mesh.current.rotation.x += 0.01;
    })

    return (
        <group ref={mesh}  {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    geometry={nodes.Object_4.geometry}
                    material={materials.transparentRed}
                />
                <mesh
                    geometry={nodes.Object_33.geometry}
                    material={materials.transparent}
                />
                <lineSegments
                    geometry={nodes.Object_21.geometry}
                    material={materials["DefaultWhite_panel.png"]}
                />
                <mesh
                    geometry={nodes.Object_21.geometry}
                    material={materials["DefaultWhite_panel.png"]}
                />
                <mesh
                    geometry={nodes.Object_3.geometry}
                    material={materials["DefaultWhite_sides.png"]}
                />
                <mesh
                    geometry={nodes.Object_5.geometry}
                    material={materials.DefaultWhite}
                />
                <mesh
                    geometry={nodes.Object_6.geometry}
                    material={materials.DefaultWhite}
                />
                <mesh
                    geometry={nodes.Object_7.geometry}
                    material={materials.DefaultWhite}
                />
                <mesh
                    geometry={nodes.Object_8.geometry}
                    material={materials["DefaultWhite_adi.png"]}
                />
                <mesh
                    geometry={nodes.Object_9.geometry}
                    material={materials["DefaultWhite_alt.png"]}
                />
                <mesh
                    geometry={nodes.Object_10.geometry}
                    material={materials["DefaultWhite_aoa_indexer.png"]}
                />
                <mesh
                    geometry={nodes.Object_11.geometry}
                    material={materials["DefaultWhite_asi.png"]}
                />
                <mesh
                    geometry={nodes.Object_12.geometry}
                    material={materials["DefaultWhite_canvasTex.png"]}
                />
                <mesh
                    geometry={nodes.Object_13.geometry}
                    material={materials["DefaultWhite_clock.png"]}
                />
                <mesh
                    geometry={nodes.Object_14.geometry}
                    material={materials["DefaultWhite_cmd.png"]}
                />
                <mesh
                    geometry={nodes.Object_15.geometry}
                    material={materials["DefaultWhite_egt.png"]}
                />
                <mesh
                    geometry={nodes.Object_16.geometry}
                    material={materials["DefaultWhite_fflow.png"]}
                />
                <mesh
                    geometry={nodes.Object_17.geometry}
                    material={materials["DefaultWhite_fuel.png"]}
                />
                <mesh
                    geometry={nodes.Object_18.geometry}
                    material={materials["DefaultWhite_gmeter.png"]}
                />
                <mesh
                    geometry={nodes.Object_19.geometry}
                    material={materials["DefaultWhite_interior.png"]}
                />
                <mesh
                    geometry={nodes.Object_20.geometry}
                    material={materials["DefaultWhite_mfd.png"]}
                />
                <mesh
                    geometry={nodes.Object_22.geometry}
                    material={materials["DefaultWhite_pitot.png"]}
                />
                <mesh
                    geometry={nodes.Object_23.geometry}
                    material={materials["DefaultWhite_pitot.png"]}
                />
                <mesh
                    geometry={nodes.Object_24.geometry}
                    material={materials["DefaultWhite_tac.png"]}
                />
                <mesh
                    geometry={nodes.Object_25.geometry}
                    material={materials["DefaultWhite_throttle.png"]}
                />
                <mesh
                    geometry={nodes.Object_26.geometry}
                    material={materials["DefaultWhite_uhf-box.png"]}
                />
                <mesh
                    geometry={nodes.Object_27.geometry}
                    material={materials["DefaultWhite_uhf-box.png"]}
                />
                <mesh
                    geometry={nodes.Object_28.geometry}
                    material={materials["DefaultWhite_revi.png"]}
                />
                <mesh
                    geometry={nodes.Object_29.geometry}
                    material={materials["DefaultWhite_seat.png"]}
                />
                <mesh
                    geometry={nodes.Object_30.geometry}
                    material={materials["DefaultWhite_vsi.png"]}
                />
                <mesh
                    geometry={nodes.Object_31.geometry}
                    material={materials["DefaultWhite_warning.png"]}
                />
                <mesh
                    geometry={nodes.Object_32.geometry}
                    material={materials["DefaultWhite_yoke.png"]}
                />
            </group>
        </group>
    );
}

useGLTF.preload("/mcdonnell_douglas_t-45_goshawk.glb");