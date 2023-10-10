import LampakModel from "../Modell/LampakModel.js"

import LampaElem from "../View/LampaElem.js"
import Lampak from "../View/Lampak.js"

class Controller{
    constructor() 
    {
     const MODEL = new LampakModel()
    // new Lampak()
        const lista = MODEL.getlist()
     for (let index = 0; index < lista.length; index++) {
          new LampaElem($("article"), lista[index])

     }
     $(window).on("kapcsolas", (event) => {
         console.log(MODEL.getlist());
        
          this.MODEL.setAllapot(event.detail.getIndex());
            event.detail.setErtek(this.MODEL.getErtek());

        });

     
     }     
}
export default Controller