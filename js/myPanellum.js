
viewer = pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "entrance",
        "author": "Victor Romero",
        "sceneFadeDuration": 1000,
		"autoLoad" : true,
		"showControls" : false,
        //"hotSpotDebug": true,
    },

    "scenes": {
        "entrance": {
            "title": "Entrance",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "1.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Forklift",
                    "sceneId": "forklift"
                },
                {
                    "pitch" : -2,
                    "yaw": 218,
                    "type": "info",
                    "text": "Pete's bench",
                    "URL": "http://google.com"
                }
            ]
        },

        "forklift": {
            "title": "Forklift",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "2.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 10,
                    "type": "scene",
                    "text": "Entrance",
                    "sceneId": "entrance",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
});

//this function locks the pitch
function lockPitch(){
    alert("lockpitch: called");
	if(viewer){
		var renderer = viewer.getRenderer();
		if(renderer){
			var canvas = renderer.getCanvas();
			if(canvas){
				var vfov = 2 * Math.atan(Math.tan(viewer.getHfov() / 180 * Math.PI * 0.5) /
                            (canvas.width / canvas.height)) / Math.PI * 180;
				var minPitch = -vfov / 2;
                var maxPitch =  vfov / 2;
				viewer.setPitchBounds([minPitch-4,maxPitch-4]);
                viewer.setPitch(0);
			} else alert("lockpitch: no canvas");
		} else alert("lockpitch: no renderer");
	} else alert("lockpitch: no viewer");
}



viewer.on('load',lockPitch);

// Make buttons work
document.getElementById('pan-up').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() + 10);
});
document.getElementById('pan-down').addEventListener('click', function(e) {
    viewer.setPitch(viewer.getPitch() - 10);
});
document.getElementById('pan-left').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() - 10);
});
document.getElementById('pan-right').addEventListener('click', function(e) {
    viewer.setYaw(viewer.getYaw() + 10);
});
document.getElementById('zoom-in').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() - 10);
});
document.getElementById('zoom-out').addEventListener('click', function(e) {
    viewer.setHfov(viewer.getHfov() + 10);
});
document.getElementById('fullscreen').addEventListener('click', function(e) {
    viewer.toggleFullscreen();
});