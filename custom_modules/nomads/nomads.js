import * as physics from '/core/physics/physics.js';
import * as keyboard from '/core/input/keyboard.js';
import { transform } from '/core/math/transform.js';
import { quaternion } from '/core/math/quaternion.js';
import { matrix } from '/core/math/matrix.js'
import { get_data } from '/core/data/antlion.js'

var show_data = false;

// game based variable setup
export const init = (data) => {
    console.log("%cNomads Initialized", "color:#FFE532");

    if(data.length != 0 && show_data) {
        console.log("%cData Loaded", "color:#1ED760")
        for(let page of data){
            console.log("%c -"+page.name, "color:#1C8D43")
        }
    }

    keyboard.init();
    physics.init();
    var trans = new transform()
    console.log(trans.type)
    var rot;
    var quart = new quaternion(1,1,1,1,null,null,rot)
    var mat = new matrix();
    console.log(get_data(1))
    
}

export const update = (t) => {
    //console.log(t);
}
