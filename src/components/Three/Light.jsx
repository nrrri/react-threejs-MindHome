import { Environment } from "@react-three/drei"

const Light = () => {
    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight castShadow position={[0, 10, 0]}
                intensity={0}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={500}
                shadow-camera-near={0.5}
                // shadow-camera-left={-10}
                // shadow-camera-right={10}
                // shadow-camera-top={10}
                shadow-camera-bottom={-10} />
            <pointLight position={[0, 150, 0]} intensity={2} castShadow={true}/>
            <Environment preset="sunset"/>
        </>
    )
}

export default Light