import { useState, useEffect, useRef, useCallback } from "react";
import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel} from "../lib/model"

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x-1, 4))
}
const HeadModel = () => {
    const headModel =`/portfolioProfile${useColorModeValue('', '4')}.glb`
    const refContainer = useRef()
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(0, 0, 0))
    const [initialCameraPosition] = useState(
      new THREE.Vector3(
        15 * Math.sin(0.8 * Math.PI),
        20 * Math.sin(0.8 * Math.PI),
        20 * Math.cos(1* Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
          const scW = container.clientWidth
          const scH = container.clientHeight
    
          renderer.setSize(scW, scH)
        }}, [renderer])
    /* eslint-disable react-hooks/exhaustive-deps */

    
    
    useEffect(() => {
        const { current: container} = refContainer
        if (container && !renderer){
            const scW = container.clientWidth
            const scH = container.clientHeight
            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            // 640 -> 240
            // 8 -> 6
            const scale = scH * 0.0005 + 0.001
            
            const camera = new THREE.OrthographicCamera(
                scale, -scale, scale, -scale, 0.001, 30000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 5)
            scene.add(ambientLight)
            const controls = new OrbitControls (camera, renderer.domElement)
            controls.autoRotate = true
            controls.target = target
            setControls(controls)
            
            loadGLTFModel(scene, headModel, {
                receiveShadow: true,
                castShadow: true,
            }).then(() => {
                animate()
                setLoading(false)
            })
            let req = null
            let frame = 0
            const animate = () => {
                req = requestAnimationFrame(animate)
                frame = frame <= 100 ? frame + 1 : frame

                if(frame <= 100){
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 100) * Math.PI * 10

                    camera.position.y = 0
                    camera.position.x = 
                    p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z = 
                    p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                } else {
                    controls.update()
                }
                renderer.render(scene, camera)
            }
            return () => {
                cancelAnimationFrame(req)
                renderer.dispose()
            }

        }
    }, [])
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
          window.removeEventListener('resize', handleWindowResize, false)
        }
      }, [renderer, handleWindowResize])

    return (<Box ref={refContainer} className="head-model" 
    style={{zIndex:"-1"}}
    mt={["0rem", '-3.75rem', '0rem']}
    mb={['0rem', '-8.75rem', '0rem']}
    w={["100vw", "30rem", "100vw/5"]}
    h={["80vh", "30rem", "30rem"]}
    position="absolute"
      display="flex"
    flexDirection="column"
    align="center"
    justify="center"
    left={['-3vw', 10, "35vw"]}
    top={['15vh', 10, "10vh"]}

    >
        {loading && (
            <Spinner size="xl" position="absolute" left="50%" top="50%" ml="calc(0px - var(--spinner-size) / 2" mt="calc(0px- var(--spinner-size)" />
        )}
        </Box>
)}
export default HeadModel