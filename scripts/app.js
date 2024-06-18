(() => {
    "use strict";

    Squirrel.addEventListener('eventDispatch', (e) => eval(`${e.detail.name}(e)`));

    Squirrel.initWithSquirrel();

    function onPropertyChange(e) {
        const propertyName = e.detail.property
        const propertyValue = e.detail.value

        switch (Squirrel.getGenericProperty(propertyName)) {
            case 'animationType':
                if(propertyValue == "please-select"){
                    document.getElementById('select-img').style.display = "block"
                    document.getElementById('loader').className = ""
                    break;
                }
                if(propertyValue == "spinner"){
                    document.getElementById('loader').className = "spinner"
                }
                if(propertyValue == "dribble"){
                    document.getElementById('loader').className = "dribble"
                }
                if(propertyValue == "side-step"){
                    document.getElementById('loader').className = "side-step"
                }
                if(propertyValue == "roadway"){
                    document.getElementById('loader').className = "roadway"
                }
                if(propertyValue == "inchworm"){
                    document.getElementById('loader').className = "inchworm"
                }
                if(propertyValue == "rain"){
                    document.getElementById('loader').className = "rain"
                }
                if(propertyValue == "square-dance"){
                    document.getElementById('loader').className = "square-dance"
                }
                if(propertyValue == "shuffle"){
                    document.getElementById('loader').className = "shuffle"
                }
                if(propertyValue == "firework"){
                    document.getElementById('loader').className = "firework"
                }
                document.getElementById('select-img').style.display = "none"
                break;
            case 'animationColor.color.*.color':
                document.getElementById('loader').style.setProperty('--color', propertyValue)
                break;
            case 'animationColor.color.*.alpha':
                document.getElementById('loader').style.setProperty('opacity', propertyValue)
                break;
            default:
                console.log("Unknown message type: " + propertyName);
                break;
        }
    }

    function onInitState(e) {
        const state = e.detail.state
        Squirrel.setSize(200, 200)
    }

    function onPropertyChangesComplete() {}

    function onSetCanvas(e) {
        const canvas = e.detail.canvas;
    }

    function onSetRuntimeMode(e) {
        const mode = e.detail.mode;
    }

    function onSetSize(e) {
        const size = e.detail.size;
    }

    function onSetPosition(e) {
        const position = e.detail.position;
    }
})();