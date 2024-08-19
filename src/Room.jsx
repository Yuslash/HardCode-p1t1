import { Center,  PresentationControls, useGLTF, useTexture } from "@react-three/drei"
import { DoubleSide } from "three";

export default function Room() {
    const { nodes } = useGLTF('/bakedroom.glb')

    const floorLevelTexture = useTexture('/floor.webp')
    floorLevelTexture.flipY = false

    const leftSideLevel = useTexture('/rightsidewall.webp')


    const sofaTexture = useTexture('/leftsidewall.webp')
    sofaTexture.flipY = false

    const pillowTexture = useTexture('/pillow.webp')
    pillowTexture.flipY = false

    const rightsideLevel = useTexture('/leftsidelevel.webp')
    rightsideLevel.flipY = false

    const tvGroup = nodes.tv

    const cubeTexture = useTexture('/cubeemmision.webp')
    cubeTexture.flipY = false

    return <>
        <PresentationControls snap global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]} >
            <Center>
                <group rotation-y={- Math.PI / 2}>
                    <mesh geometry={nodes.FloorLevel.geometry} >
                        <meshBasicMaterial map={floorLevelTexture} />
                    </mesh>
                    <mesh rotation-x={Math.PI} position-y={0.5} position-z={0.5} rotation-y={Math.PI / 2} geometry={nodes.LeftSideLevel.geometry} >
                        <meshBasicMaterial side={DoubleSide} map={leftSideLevel} />
                    </mesh>
                    <mesh position={nodes.sofa.position} geometry={nodes.sofa.geometry}>
                        <meshBasicMaterial map={sofaTexture} />
                    </mesh>

                    {tvGroup.children.map((child, index) => (

                        <mesh
                            key={index}
                            geometry={child.geometry}
                            position={tvGroup.position}

                        >
                            <meshStandardMaterial metalness={1} color={'black'} />
                        </mesh>

                    ))}
                    <mesh position={nodes.pillow.position} geometry={nodes.pillow.geometry}>
                        <meshBasicMaterial map={pillowTexture} />
                    </mesh>
                </group>
                <mesh rotation-y={Math.PI} rotation-z={Math.PI} position={nodes.RightSideLevel.position} geometry={nodes.RightSideLevel.geometry}>
                    <meshBasicMaterial map={rightsideLevel} side={DoubleSide} />
                </mesh>
                <mesh rotation-y={- Math.PI / 2} position-y={0.475796} position-z={0.341232} position-x={0.13245} geometry={nodes.Table.geometry}></mesh>
                <mesh rotation={nodes.helltext.rotation} position={nodes.helltext.position} geometry={nodes.helltext.geometry}>
                    <meshStandardMaterial color={'orangered'} emissive={'orangered'} emissiveIntensity={1} />
                </mesh>
            </Center>
        </PresentationControls>
    </>
}