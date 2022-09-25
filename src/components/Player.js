import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export const Player = () => {
    const { camera } = useThree();
    const [ref, api] = useSphere( () => ({
        mass:1,
        type: 'Dynamic',
        position: [0, 1, 0],
    }))

    const pos = useRef([0,0,0]);

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
    }, [api.position]);

    useFrame( () => {
        camera.position.copy(new Vector3(pos.current[0],pos.current[1]));

    })

    return (
        <mesh ref={ref} />
    )
}