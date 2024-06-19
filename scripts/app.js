(() => {
    "use strict";

    Squirrel.addEventListener('eventDispatch', (e) => eval(`${e.detail.name}(e)`));

    Squirrel.initWithSquirrel();

    var animationSelected;
    var colorSelected;
    var opacitySelected;

    function onInitState(e) {
        const state = e.detail.state
        
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

        if(animationSelected != 'please-select') {
            document.getElementById('loader').className = animationSelected
            document.getElementById('loader').style.setProperty('--color', colorSelected)
            document.getElementById('loader').style.setProperty('--opacity', opacitySelected)
            document.getElementById('select-img').style.display = 'none'
        }
        else {
            document.getElementById('select-img').style.display = 'block'
            document.getElementById('loader').className = ''
        }
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