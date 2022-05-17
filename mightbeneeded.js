//ground
var geometry1 = new THREE.BoxGeometry( 0.1, window.innerWidth/60, 150);
var material1 = new THREE.MeshBasicMaterial( {
    color: 0xFF1100,
    transparent:true,
    opacity : 0.8
} );
var cube1 = new THREE.Mesh( geometry1, material1 );

cube1.position.y = ZZ;
cube1.position.z = -50;
cube1.rotation.z = Math.PI/2;

//end of g


var CG2 = new THREE.BoxGeometry( 0.1, window.innerHeight, 10);
var CM2 = new THREE.MeshBasicMaterial( { color: 0x000080 } );
var cube2 = new THREE.Mesh( CG2, CM2 );

cube2.position.y = 0;
cube2.position.x = 4;
cube2.position.z = -50;
cube2.rotation.x = Math.PI/2;

var CG3 = new THREE.BoxGeometry( 0.1, window.innerHeight, 10);
var CM3 = new THREE.MeshBasicMaterial( { color: 0x191970 } );
var cube3 = new THREE.Mesh( CG3, CM3 );

cube3.position.y = 0;
cube3.position.x = -4;
cube3.position.z = -50;
cube3.rotation.x = Math.PI/2;

var CG4 = new THREE.BoxGeometry( 0.1, window.innerHeight, 10);
var CM4 = new THREE.MeshBasicMaterial( { color: 0x00688B } );
var cube4 = new THREE.Mesh( CG4, CM4 );

cube4.position.y = 5;
cube4.position.x = 0;
cube4.position.z = -100;
cube4.rotation.y = Math.PI/2;
cube4.rotation.z = Math.PI/2;