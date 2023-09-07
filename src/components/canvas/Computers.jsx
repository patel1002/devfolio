import {Suspense , useEffect , useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload ,SpotLight,useGLTF } from '@react-three/drei';
import CanvasLoader from '../loader';
import * as THREE from 'three';
const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
    <hemisphereLight intensity={0.75} groundColor="black" />
    <pointLight intensity={1} />
    {/* <spotLight 
      position={[-20,50,10]}/> */}
    <primitive
        object={computer.scene}
        scale={isMobile ?  0.40:0.60}
        position={[0, -2.75, -1.3]}
        rotation={[-0.01, -0.2, -0.1]}
    />
</mesh>
  )
}


const ComputersCanvas =() => {

  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px');

    setisMobile(mediaQuery.matches);

    const handleChange =(event) => {
      setisMobile(event.matches)
    }


    mediaQuery.addEventListener('change' , handleChange);


    return () =>  {
      mediaQuery.removeEventListener('change',handleChange)
    }
   
  }, []);
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position :[20 , 3 ,5], fov:25 }}
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
          
        <Computers isMobile={isMobile}/>
      </Suspense>
    </Canvas>
  )
}

export default ComputersCanvas 




  // <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <primitive
          object={computer.scene}
      /> */}
    {/* </mesh> */}