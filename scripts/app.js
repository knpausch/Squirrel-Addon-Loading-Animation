(() => {
    "use strict";

    Squirrel.addEventListener('eventDispatch', (e) => eval(`${e.detail.name}(e)`));

    Squirrel.initWithSquirrel();

    function onPropertyChange(e) {
        const propertyName = e.detail.property
        const propertyValue = e.detail.value

        switch (Squirrel.getGenericProperty(propertyName)) {
            case 'animationType':
                if(propertyValue == "spinner"){
                    document.getElementById('loader').className = "spinner"
                }
                if(propertyValue == "dots"){
                    document.getElementById('loader').className = "dots --3"
                }
                if(propertyValue == "dice"){
                    document.getElementById('loader').className = "dice --3"
                }
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

        document.getElementById('loader').style.width = window.innerWidth + 'px';
        document.getElementById('loader').style.height = window.innerHeight + 'px';
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
        document.getElementById('loader').style.width = window.innerWidth + 'px';
        document.getElementById('loader').style.height = window.innerHeight + 'px';

        // if(size.width != document.getElementById('loader').offsetWidth || size.height != document.getElementById('loader').offsetHeight) {
        //     processSize()
        // }
    }

    function onSetPosition(e) {
        const position = e.detail.position;
    }

    // function processSize() {
    //     Squirrel.setSize(new SquirrelSize(document.getElementById('loader').style.offsetWidth));
    //     Squirrel.setSize(new SquirrelSize(document.getElementById('loader').style.offsetHeight));
    // }
})();