(() => {
    "use strict";

    Squirrel.addEventListener('eventDispatch', (e) => eval(`${e.detail.name}(e)`));

    Squirrel.initWithSquirrel();

    var animationSelected;
    var colorSelected;
    var opacitySelected;

    function onInitState(e) {
        const state = e.detail.state
        Squirrel.setSize(200, 200)
        
        if(state != null) {
            animationSelected = state.animationType
            colorSelected = state.animationColor.color[0].color
            opacitySelected = state.animationColor.color[0].alpha
            renderAnimation()
        }
    }

    function onPropertyChange(e) {
        const propertyName = e.detail.property
        const propertyValue = e.detail.value

        switch (Squirrel.getGenericProperty(propertyName)) {
            case 'animationType':
                animationSelected = propertyValue
                break;
            case 'animationColor.color.*.color':
                colorSelected = propertyValue
                break;
            case 'animationColor.color.*.alpha':
                opacitySelected = propertyValue
                break;
        }
        renderAnimation()
    }

    function renderAnimation() {
        document.getElementById('loader').className = animationSelected
        document.getElementById('loader').style.setProperty('--color', colorSelected)
        document.getElementById('loader').style.opacity = opacitySelected
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