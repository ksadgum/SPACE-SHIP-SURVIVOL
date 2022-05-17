            var scene = new THREE.Scene();

            document.getElementById("restart").style.display = "none";



            function play() {
                var audio = document.getElementById("audio");
                audio.play();
              }

            

            var Sz = 0.1;

            var ZZ = -4.5;

            var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 );

            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth*0.9, window.innerHeight*0.7 );
            document.getElementById("CENTER").appendChild( renderer.domElement );




            var loader = new THREE.GLTFLoader();


            var rangeInput = document.getElementById("myRange");
            rangeInput.style.backgroundSize = "100% 100%"
            var RangeSize = rangeInput.style.backgroundSize.split("% ");




            //sky
            var skyGeo = new THREE.BoxGeometry( 0.01, window.innerWidth, window.innerHeight );
            var skyMat = new THREE.MeshBasicMaterial( { color: 0xffffff } );
            var sky = new THREE.Mesh( skyGeo, skyMat );

            camera.position.z = 5;

            //sky
            sky.position.x = 1;
            sky.position.y = 0;
            sky.position.z = -100;
            sky.rotation.x = Math.PI/2;
            sky.rotation.y = 0;
            sky.rotation.z = Math.PI/2;
            //spheres
            var geometry = new THREE.SphereGeometry(1, 5, 12);
            var material = new THREE.MeshPhongMaterial({
                color: 0x6e6e6e,
                transparent: true,
                opacity: 1
            });
            
            

            
        


            var Sphere = new THREE.Mesh(geometry, material);
            Sphere.position.x = -3;
            Sphere.position.y = ZZ + 1;
            Sphere.position.z = -130 - 15*Math.random();
            var Sphere2 = new THREE.Mesh(geometry, material);
            Sphere2.position.x = 0;
            Sphere2.position.y = ZZ + 1;
            Sphere2.position.z = -130 - 15*Math.random();
            var Sphere3 = new THREE.Mesh(geometry, material);
            Sphere3.position.x = 3;
            Sphere3.position.y = ZZ + 3;
            Sphere3.position.z = -130 - 15*Math.random();

            var Sphere4 = new THREE.Mesh(geometry, material);
            Sphere4.position.x = -3;
            Sphere4.position.y = ZZ + 1;
            Sphere4.position.z = -125 -20- 30*Math.random();
            var Sphere5 = new THREE.Mesh(geometry, material);
            Sphere5.position.x = 0;
            Sphere5.position.y = ZZ + 3;
            Sphere5.position.z = -125 -20- 30*Math.random();
            var Sphere6 = new THREE.Mesh(geometry, material);
            Sphere6.position.x = 3;
            Sphere6.position.y = ZZ + 3;
            Sphere6.position.z = -125 -20- 30*Math.random();

            var Sphere7 = new THREE.Mesh(geometry, material);
            Sphere7.position.x = -3;
            Sphere7.position.y = ZZ + 3;
            Sphere7.position.z = -115 - 50*Math.random();
            var Sphere8 = new THREE.Mesh(geometry, material);
            Sphere8.position.x = 0;
            Sphere8.position.y = ZZ + 3;
            Sphere8.position.z = -115 - 50*Math.random();
            var Sphere9 = new THREE.Mesh(geometry, material);
            Sphere9.position.x = 3;
            Sphere9.position.y = ZZ + 1;
            Sphere9.position.z = -115 - 50*Math.random();

            var GROUP = []
            for(let i = 0 ; i<2;i++){
                var SphereX = new THREE.Mesh(geometry, material);
                SphereX.position.x = 3;
                SphereX.position.y = ZZ + 1;
                SphereX.position.z = -164   - i*5 - 50*Math.random();
                GROUP.push(SphereX);
            }
            for(let i = 0 ; i<2;i++){
                var SphereX = new THREE.Mesh(geometry, material);
                SphereX.position.x = 3;
                SphereX.position.y = ZZ + 3;
                SphereX.position.z = -125 - 50*Math.random();
                GROUP.push(SphereX);
            }
            for(let i = 0 ; i<4;i++){
                var SphereX = new THREE.Mesh(geometry, material);
                SphereX.position.x = 0;
                SphereX.position.y = ZZ + 1;
                SphereX.position.z = -150  - i*4 - 50*Math.random();
                GROUP.push(SphereX);
            }
            for(let i = 0 ; i<2;i++){
                var SphereX = new THREE.Mesh(geometry, material);
                SphereX.position.x = -3;
                SphereX.position.y = ZZ + 3;
                SphereX.position.z = -135 - 50*Math.random();
                GROUP.push(SphereX);
            }
            for(let i = 0 ; i<2;i++){
                var SphereX = new THREE.Mesh(geometry, material);
                SphereX.position.x = -3;
                SphereX.position.y = ZZ + 1;
                SphereX.position.z = -135 - i*3 - 50*Math.random();
                GROUP.push(SphereX);
            }
            for(let i = 0 ; i<3;i++){
                var SphereX = new THREE.Mesh(geometry, material);
                SphereX.position.x = -3;
                SphereX.position.y = ZZ + 1;
                SphereX.position.z = -135 - i*20 - 50*Math.random();
                GROUP.push(SphereX);
            }



            
            var num = 0;

            

            
            var animate = function () {
                requestAnimationFrame( animate );

                num+=1
                document.getElementById("score").innerText = Math.round(num*0.01 );
                localStorage.setItem("myScore", Math.round(num*0.01 ));
                localStorage.getItem("myScore");

                if(Sz<=2){
                    Sz += 0.00005 +0.000008*Math.random() ;
                }

                for(let i = 0; i < GROUP.length - 1; i++){
                    GROUP[i].position.z += Sz;
                    GROUP[i].rotation.x += 0.3 +0.4*Math.random();
                    if(GROUP[i].position.z>=3){
                        GROUP[i].position.z = -125 - i*i*4 - 10*Math.random();
                    }
                }


                Sphere.position.z += Sz;

                Sphere.rotation.x += 0.3;

                Sphere2.position.z += Sz;

                Sphere2.rotation.x += 0.3;

                Sphere3.position.z += Sz;

                Sphere3.rotation.x += 0.3;

                

                Sphere4.position.z += Sz;

                Sphere4.rotation.x += 0.3;

                Sphere5.position.z += Sz;

                Sphere5.rotation.x += 0.36;

                Sphere6.position.z += Sz;

                Sphere6.rotation.x += 0.3;



                Sphere7.position.z += Sz;

                Sphere7.rotation.x += 0.3;

                Sphere8.position.z += Sz;

                Sphere8.rotation.x += 0.39;

                Sphere9.position.z += Sz;

                Sphere9.rotation.x += 0.3;

                if(Sphere.position.z>=3){
                    Sphere.position.z = -125 - 10*Math.random();
                }
                if(Sphere2.position.z>=8){
                    Sphere2.position.z = -125 - 10*Math.random();
                }
                if(Sphere3.position.z>=4){
                    Sphere3.position.z = -125 - 10*Math.random();
                }

                

                if(Sphere4.position.z>=7){
                    Sphere4.position.z = -125 - 30*Math.random();
                }
                if(Sphere5.position.z>=5){
                    Sphere5.position.z = -125 - 30*Math.random();
                }
                if(Sphere6.position.z>=6){
                    Sphere6.position.z = -125 - 30*Math.random();
                }



                if(Sphere7.position.z>=6){
                    Sphere7.position.z = -125 - 50*Math.random();
                }
                if(Sphere8.position.z>=6){
                    Sphere8.position.z = -125 - 80*Math.random();
                }
                if(Sphere9.position.z>=6){
                    Sphere9.position.z = -125 - 40*Math.random();
                }

                

                
            renderer.render( scene, camera );

                
            };
            
            



            function TopStart(){    
            animate();
            // var SSStart = setInterval(animate,0)
            document.getElementById("ready").style.display = "none";
            document.getElementById("restart").style.display = "inline";

            }

            function RESTART(){
                location.reload();
                document.getElementById("ready").style.display = "inline";
                document.getElementById("restart").style.display = "none";
            }

            document.getElementById("lastScore").innerText = localStorage.getItem("myScore");
            

            

            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

            //Create a DirectionalLight and turn on shadows for the light
            const light = new THREE.DirectionalLight( 0xfffff0, 5 );
            light.position.set( 0, 1 , 10); //default; light shining from top
            light.castShadow = true; // default false
            scene.add( light );

            //Set up shadow properties for the light
            light.shadow.mapSize.width = 512; // default
            light.shadow.mapSize.height = 512; // default
            light.shadow.camera.near = 0.5; // default
            light.shadow.camera.far = 500; // default

            Sphere.castShadow = true;

            // Sphere.receiveShadow = false; //default


            //Agian Sphere Me
            //Sphere Me
            var geometryMe = new THREE.SphereGeometry(1, 10, 0);
            var materialMe = new THREE.MeshPhongMaterial({ 
                color: 0xf0004c 
            });
            
            var SphereMe = new THREE.Mesh(geometryMe, materialMe);
            SphereMe.position.x = 0;
            SphereMe.position.y = ZZ + 1;
            SphereMe.position.z = -2;


            SphereMe.rotation.x = -0;
            SphereMe.rotation.z = 0;



            

            var allSpheres = [Sphere,Sphere2,Sphere3,Sphere4,Sphere5,Sphere6,Sphere7,Sphere8,Sphere9]
            for(let i = 0 ; i<GROUP.length - 1 ; i++){
                allSpheres.push(GROUP[i]);

            }



            scene.add(Sphere, Sphere2 , Sphere3);
            scene.add(Sphere4, Sphere5 , Sphere6 );
            scene.add(Sphere7, Sphere8 , Sphere9 );

            for(let i = 0 ; i<GROUP.length - 1 ; i++){
                scene.add(GROUP[i])

            }

        



            //my ship
            


            

            
            var loadIt = function(){
                requestAnimationFrame( loadIt );
                renderer.render( scene, camera );
            }
            loadIt();


            loader.load('../models/scene.gltf',function(gltf){
                scene.add(gltf.scene);


                gltf.scene.scale.set(0.4,0.4,0.4);
                gltf.scene.position.z = -4;
                gltf.scene.position.y = -1;
                gltf.scene.rotation.x = 0.7;

            document.getElementById("ready").addEventListener("click",controlShip)

            function controlShip(){
                gltf.scene.scale.set(0.08,0.08,0.08);
                gltf.scene.position.z = -2;
                gltf.scene.position.y = ZZ + 1;
                gltf.scene.rotation.x = 0;
                gltf.scene.rotation.y = Math.PI;

                
                
                document.addEventListener("keydown", change_direction);
                document.addEventListener('touchstart', change_direction);        
                // document.addEventListener('touchmove', change_direction);


            // change_direction();
            function change_direction(event) {
      
                
                const LEFT_KEY = 37;
                const RIGHT_KEY = 39;
                const UP_KEY = 38;
                const DOWN_KEY = 40;

                
                const keyPressed = event.keyCode;


                //mobile version 2
      
      
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
           


function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0  && gltf.scene.position.x != -3 && gltf.scene.position.x >= -2 ) {
            /* right swipe */ 
            
            let i =  gltf.scene.position.x;
            let I =  gltf.scene.position.x - 3;
            function ML(){
                // gltf.scene.rotation.z -= 0.01;
                i-=0.15
                    gltf.scene.position.x = i
                    if(i <= I){
                        // function rl(){
                        //     gltf.scene.rotation.z += 0.01;
                        //     if(gltf.scene.rotation.z >= 0){
                        //         gltf.scene.rotation.z = 0;
                        //         clearInterval(RL);
                        //     }
                        // }
                        // let RL = setInterval(rl , 0);
                        clearInterval(SI);
                    }
            }

            let SI = setInterval(ML , 0);
          
            
        } else {
            /* left swipe */
            if(gltf.scene.position.x != 3 && gltf.scene.position.x <= 2){
            let i =  gltf.scene.position.x;
                    let I =  gltf.scene.position.x + 3;
                    function MR(){
                            // gltf.scene.rotation.z += 0.01;
                            i+=0.15
                            gltf.scene.position.x = i
                            if(i >= I){
                                // function rr(){
                                //     gltf.scene.rotation.z -= 0.01;
                                //     if(gltf.scene.rotation.z <= 0){
                                //         gltf.scene.rotation.z = 0;
                                //         clearInterval(RR);
                                //     }
                                // }
                                // let RR = setInterval(rr , 0);
                                clearInterval(SIr);
                            }
                    }

                    let SIr = setInterval(MR , 0);
                }
          
            
        }                       
    } else {
        if ( yDiff > 0  && gltf.scene.position.y <= ZZ+2) {
            /* down swipe */ 
            let i =  gltf.scene.position.y;
            let I =  gltf.scene.position.y + 2;
            function MD(){
                    // gltf.scene.rotation.x += 0.01;
                    i+=0.15
                    gltf.scene.position.y = i
                    if(gltf.scene.position.y >= I){
                        // function ru(){
                        //     gltf.scene.rotation.x -= 0.01;
                        //     if(gltf.scene.rotation.x <= 0){
                        //         gltf.scene.rotation.x = 0;
                        //         clearInterval(RU);
                        //     }
                        // }
                        // let RU = setInterval(ru , 0);
                        clearInterval(SId);
                    }
            }

            let SId = setInterval(MD , 0);
          
      
        } else { 
            /* up swipe */
            if(gltf.scene.position.y >= ZZ+2){
            let i =  gltf.scene.position.y;
            let I =  gltf.scene.position.y -2;
            function MD(){
                    // gltf.scene.rotation.x -= 0.01;
                    i-=0.15
                    gltf.scene.position.y = i
                    if(gltf.scene.position.y <= I){
                        // function rd(){
                        //     gltf.scene.rotation.x += 0.01;
                        //     if(gltf.scene.rotation.x >= 0){
                        //         gltf.scene.rotation.x = 0;
                        //         clearInterval(RD);
                        //     }
                        // }
                        // let RD = setInterval(rd , 0);
                        clearInterval(SId);
                    }
            }

            let SId = setInterval(MD , 0);
        }
          
      
      
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

      
      //end of mobile version2
                
                if (keyPressed === LEFT_KEY && gltf.scene.position.x != -3 && gltf.scene.position.x >= -2) {
                    let i =  gltf.scene.position.x;
                    let I =  gltf.scene.position.x - 3;
                    function ML(){
                        gltf.scene.rotation.z -= 0.08;
                        i-=0.15
                            gltf.scene.position.x = i
                            if(i <= I){
                                function rl(){
                                    gltf.scene.rotation.z += 0.02;
                                    if(gltf.scene.rotation.z >= 0){
                                        clearInterval(RL);
                                    }
                                }
                                var RL = setInterval(rl , 0);
                                clearInterval(SI);
                            }
                    }

                    var SI = setInterval(ML , 0);
                    
                }
                if (keyPressed === UP_KEY && gltf.scene.position.y <= ZZ+2) {
                    let i =  gltf.scene.position.y;
                    let I =  gltf.scene.position.y + 2;
                    function MD(){
                            gltf.scene.rotation.x += 0.06;
                            i+=0.15
                            gltf.scene.position.y = i
                            if(gltf.scene.position.y >= I){
                                function ru(){
                                    gltf.scene.rotation.x -= 0.02;
                                    if(gltf.scene.rotation.x <= 0){
                                        clearInterval(RU);
                                    }
                                }
                                var RU = setInterval(ru , 0);
                                clearInterval(SId);
                            }
                    }

                    var SId = setInterval(MD , 0);
                }
                if (keyPressed === RIGHT_KEY && gltf.scene.position.x != 3 && gltf.scene.position.x <= 2) {
                    // gltf.scene.position.x += 3;
                    let i =  gltf.scene.position.x;
                    let I =  gltf.scene.position.x + 3;
                    function MR(){
                            gltf.scene.rotation.z += 0.08;
                            i+=0.15
                            gltf.scene.position.x = i
                            if(i >= I){
                                function rr(){
                                    gltf.scene.rotation.z -= 0.02;
                                    if(gltf.scene.rotation.z <= 0){
                                        clearInterval(RR);
                                    }
                                }
                                var RR = setInterval(rr , 0);
                                clearInterval(SIr);
                            }
                    }

                    var SIr = setInterval(MR , 0);
                }
                if (keyPressed === DOWN_KEY && gltf.scene.position.y >= ZZ+2) {
                    let i =  gltf.scene.position.y;
                    let I =  gltf.scene.position.y -2;
                    function MD(){
                            gltf.scene.rotation.x -= 0.06;
                            i-=0.15
                            gltf.scene.position.y = i
                            if(gltf.scene.position.y <= I){
                                function rd(){
                                    gltf.scene.rotation.x += 0.02;
                                    if(gltf.scene.rotation.x >= 0){
                                        clearInterval(RD);
                                    }
                                }
                                var RD = setInterval(rd , 0);
                                clearInterval(SId);
                            }
                    }

                    var SId = setInterval(MD , 0);
                }

            }


            

            //
            var I = 0;

            
            function detectCollisionCubes(){
                
                if(gltf.scene.position.y > ZZ+3){
                    gltf.scene.position.y = ZZ+3
                }else if(gltf.scene.position.y < ZZ+1){
                    gltf.scene.position.y = ZZ+1
                }else if(gltf.scene.position.x > 3){
                    gltf.scene.position.x = 3
                }else if(gltf.scene.position.x < -3){
                    gltf.scene.position.x = -3
                }
                for(i=0 ; i<allSpheres.length - 1 ; i++){
                    if(allSpheres[i].position.distanceToSquared(gltf.scene.position) <= 1.5){
                        allSpheres[i].color = 0x000000;
                        I++
                        var VTC = RangeSize[0]-0.5*I;
                        rangeInput.style.backgroundSize = `${VTC +"% "+ RangeSize[1]}`;

                        document.getElementById("audio").src= "";

                        document.getElementById("audio").src="https://assets.mixkit.co/sfx/preview/mixkit-quick-positive-video-game-notification-interface-265.mp3";
                        play();
      
      
                    }
                    if(VTC<=-2){
                        location.reload();
                    }
                }
                    
              }

            
            
            setInterval(detectCollisionCubes,0);

            }


            
            });

        







            

            //real Space
            loader.load('../models2/scene.gltf',function(gltf){
                scene.add(gltf.scene);
                gltf.scene.scale.set(1000,1000,1000);
                gltf.scene.position.x = -1300;
                gltf.scene.position.y = -1300;
                gltf.scene.position.z = 2700;

                function animate2(){
                    gltf.scene.rotation.y += 0.000005;
                    // gltf.scene.rotation.x += 0.01;
                }
                setInterval(animate2,0);
            })

            //End Of real space????????????!!!!!!!!!!  


            //end ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


            // let texture = new THREE.TextureLoader().load("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg");
            // // Create sprite material objects SpriteMaterial
            // let spriteMaterial = new THREE.SpriteMaterial({
            // color:0xff00ff,// Sets the color of the sprite rectangle area
            // rotation:0,// Rotate sprite objects 45 degree , Radian value
            // map: texture,// Set sprite texture map
            // });
            // // Create sprite model objects , No geometry is required geometry Parameters
            // let sprite = new THREE.Sprite(spriteMaterial);
            // scene.add(sprite);
            // // Control sprite size , For example, the sprite size in visualization represents the data size Just set up x、y Two components can
            // sprite.scale.set(10, 50, 1);
            // sprite.position.z = -99;
