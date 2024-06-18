(() => {
    "use strict";

    Squirrel.addEventListener('eventDispatch', (e) => eval(`${e.detail.name}(e)`));

    Squirrel.initWithSquirrel();

    var animationSelected;

    function renderAnimation() {
        document.getElementById('loader').className = animationSelected
    }

    function onInitState(e) {
        const state = e.detail.state
        Squirrel.setSize(200, 200)
        
        if(state != null) {
            animationSelected = state.animationType
            renderAnimation()
        }
    }

    function onPropertyChange(e) {
        const propertyName = e.detail.property
        const propertyValue = e.detail.value

        switch (Squirrel.getGenericProperty(propertyName)) {
            case 'animationType':
                animationSelected = propertyValue
        }
        renderAnimation()
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