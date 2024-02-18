AFRAME.registerComponent("bowling-balls", {
  init: function () {
    // challenge 1:call function throw ball
    this.throwBall = this.throwBall.bind(this);
    throwBall.addEventListener('keydown', this.throwBall, false);

  },
  throwBall: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var  ball = document.createElement("a-entity");

        ball.setAttribute("gltf-model", "./models/bowling_ball/scene.gltf");

        ball.setAttribute("scale", { x: 3, y: 3,  z: 3});

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        ball.setAttribute("position", {
          x: pos.x,
          y: pos.y-1.2,
          z: pos.z,
        });

        //challenge 2:Take the camera element as Three.js object and then set the velocity direction.
    var camera=document.querySelector( "#camera" ).object3D;
    var vector = new THREE.Vector3()
    camera.getWorldDirection(direction)
    ball.setAttribute("velocity",direction.getScalar(-10));

    




        var scene = document.querySelector("#scene");

        scene.appendChild(ball);
      }
    });
  },
});


