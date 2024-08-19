import { DoubleSide } from "three";

export default function Enivornment()
{
    return <>
        <mesh rotation-x={Math.PI / 2} position-y={-0.8} >
            <planeGeometry args={[100,100]} />
            <meshBasicMaterial color={'#1e1135'} side={DoubleSide} />
        </mesh>
    </>
}