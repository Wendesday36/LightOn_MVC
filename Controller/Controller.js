import LampakModel from "../Modell/LampakModel.js"

import LampaElem from "../View/LampaElem.js"
import Lampak from "../View/Lampak.js"

class Controller{
    constructor() 
    {
     const MODEL = new LampakModel()
    // new Lampak()

     for (let index = 0; index < 9; index++) {
          new LampaElem($("article"), index)

     }
     $(window).on("kapcsolas", (event) => {
         console.log(MODEL.getlist());
        
          this.MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(this.MODEL.getErtek());

        });

     
     }     
}
export default Controller