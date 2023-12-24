const DOMSelectors = {
  button: document.querySelector("#button1"),
  gallery: document.querySelector("#gallery"),
  newButton: document.querySelector("newButton")
}





DOMSelectors.button.addEventListener("click", function (event) {
  event.preventDefault();
  const newButton = document.createElement("button");
  newButton.textContent = "Why did you click me?"
  document.body.appendChild(newButton);
 

  newButton.addEventListener("click", function(e) {
    e.preventDefault();
    DOMSelectors.gallery.insertAdjacentHTML("afterend", `<img src="https://assets.fortnitecreativehq.com/wp-content/uploads/2023/05/01225041/Fort_Nut.jpeg"></img>`)
  })
})
































// let scene;

//       function init() {
        
//         scene = new THREE.Scene();
//         scene.background = new THREE.Color(0xdddddd);

//         camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);

//         hlight = new THREE.AmbientLight(0x404040,100);
//         scene.add(hlight);

//         renderer = new THREE.WebGLRenderer({antialias:true});
//         renderer.setSize(window.innerWidth,window.innerHeight);
//         document.body.appendChild(renderer.domElement);

//         let loader = new THREE.GLTFLoader();
//         loader.load('scene.gltf', function(gltf){
//           scene.add(gltf.scene);
//           renderer.render(scene,camera);
//         })

//       }