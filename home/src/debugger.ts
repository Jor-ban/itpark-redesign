import { scene } from "./scene";
import { GUI } from 'dat.gui'
import { ACESFilmicToneMapping, AmbientLight, AxesHelper, CineonToneMapping, Light, LinearToneMapping, NoToneMapping, Object3D, ReinhardToneMapping } from "three";
import { camera } from "./camera";
import { updateAllMaterials } from "./loadingManager";
import { renderer } from "./renderer";

declare global {
  interface Window {
    enableDebug: () => void;
  }
}

export const debugParams = {
  axesHelperLength: 5,
  envMapIntensity: 0,
}

window.enableDebug = () => {
  // camera part
  var gui = new GUI({name: 'My GUI'});
  const cameraFolder = gui.addFolder('Cameras');
  cameraFolder.add(camera.position, 'x', -10, 10);
  cameraFolder.add(camera.position, 'y', -10, 10);
  cameraFolder.add(camera.position, 'z', -10, 10);
  cameraFolder.add({rotationX: camera.rotation.x}, 'rotationX', -Math.PI, Math.PI)
      .onChange((value) => camera.rotation.x = value);
  cameraFolder.add({rotationY: camera.rotation.y}, 'rotationY', -Math.PI, Math.PI)
      .onChange((value) => camera.rotation.y = value);
  cameraFolder.add({rotationZ: camera.rotation.z}, 'rotationZ', -Math.PI, Math.PI)
      .onChange((value) => camera.rotation.z = value);
  cameraFolder.add(camera, 'fov', 1, 180)
      .onChange((value) => {
        camera.fov = value
        camera.updateProjectionMatrix()
      });
  cameraFolder.add(camera, 'updateProjectionMatrix');
  const lightsFolder = gui.addFolder('Lights');
  const objectsFolder = gui.addFolder('Objects');
  for(const child of scene.children) {
    // lights part
    if(child instanceof Light) {
      const light = lightsFolder.addFolder(child.name || 'Light ' + child.uuid);
      light.add(child, 'intensity', 0, 10)
      light.add(child, 'visible');
      light.add(child, 'castShadow');
      light.addColor({color: child.color.getHex()}, 'color').onChange((value) => {
        child.color.set(value)
      })
      if(!(child instanceof AmbientLight)) {
        light.add(child.position, 'x', -10, 10);
        light.add(child.position, 'y', -10, 10);
        light.add(child.position, 'z', -10, 10);
        light.add({rotationX: child.rotation.x}, 'rotationX', -Math.PI, Math.PI)
        .onChange((value) => child.rotation.x = value);
        light.add({rotationY: child.rotation.y}, 'rotationY', -Math.PI, Math.PI)
            .onChange((value) => child.rotation.y = value);
        light.add({rotationZ: child.rotation.z}, 'rotationZ', -Math.PI, Math.PI)
            .onChange((value) => child.rotation.z = value);
      }
    } else if(child instanceof Object3D) {
      const object = objectsFolder.addFolder(child.name || '3D Object ' + child.uuid)
      object.add(child.position, 'x', -10, 10);
      object.add(child.position, 'y', -10, 10);
      object.add(child.position, 'z', -10, 10);
      object.add({rotationX: child.rotation.x}, 'rotationX', -Math.PI, Math.PI)
          .onChange((value) => child.rotation.x = value);
      object.add({rotationY: child.rotation.y}, 'rotationY', -Math.PI, Math.PI)
          .onChange((value) => child.rotation.y = value);
      object.add({rotationZ: child.rotation.z}, 'rotationZ', -Math.PI, Math.PI)
          .onChange((value) => child.rotation.z = value);
      object.add({scaleX: child.scale.x}, 'scaleX', -Math.PI, Math.PI)
          .onChange((value) => child.scale.x = value);
      object.add({scaleY: child.scale.y}, 'scaleY', -Math.PI, Math.PI)
          .onChange((value) => child.scale.y = value);
      object.add({scaleZ: child.scale.z}, 'scaleZ', -Math.PI, Math.PI)
          .onChange((value) => child.scale.z = value);
      object.add(child, 'visible');
      object.add(child, 'receiveShadow');
      object.add(child, 'frustumCulled');
    }
  }
  // axes center 
  const axesHelper = new AxesHelper( 5 );
  gui.add(debugParams, 'axesHelperLength', 0, 20).onChange((value) => {
    axesHelper.scale.set(value, value, value)
  });
  scene.add( axesHelper );
  // env map
  gui.add(debugParams, 'envMapIntensity', 0, 10).step(0.01).onChange((value) => {
    debugParams.envMapIntensity = value
    updateAllMaterials()
  })
  // tone mapping
  gui.add({toneMapping: renderer.toneMapping}, 'toneMapping', {
    None: NoToneMapping,
    Linear: LinearToneMapping,
    Reinhard: ReinhardToneMapping,
    Uncharted2: ReinhardToneMapping,
    Cineon: CineonToneMapping,
    ACESFilmic: ACESFilmicToneMapping,
  }).onChange((value) => {
    renderer.toneMapping = Number(value)
    updateAllMaterials()
  })

  // memory checking
  const perf = window.performance as unknown as {memory: {
    usedJSHeapSize: number,
    totalJSHeapSize: number,
    jsHeapSizeLimit: number,
  }} || null
  
  setInterval(() => {
    console.log(` Performance.memory ::
      heap: ${perf.memory.usedJSHeapSize /Math.pow(1000, 2)} MB, 
      total: ${perf.memory.totalJSHeapSize /Math.pow(1000, 2)} MB, 
      limit: ${perf.memory.jsHeapSizeLimit /Math.pow(1000, 2)} MB`
    );
  }, 2000)
} 