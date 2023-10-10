class LampaElem {
  ertek
    #index
    #ertek
    constructor(szuloelem, index){
       
        this.szuloelem = szuloelem
        this.#htmlOsszerak()
        this.#index = index
        this.kattinthato = true
        this.elem = $(".elem:last-child");
        this.pElem = this.elem.children("p");
        this.#ertek = this.ertek;
        this.elem.on("click", () => {
          
          this.#kattintasTrigger()
            this.#setSzin();
            //console.log("zöld")
            
        })
    }
    setErtek(ertek) {
        this.ertek = !this.ertek;
        this.#setSzin();
        this.pElem.html(ertek);
        

    }
    #htmlOsszerak() {
        let txt = ""
        txt += `<div class="elem"><p class="pelem"></p></div>`;
        
        this.szuloelem.append(txt)
    }
    #setSzin() {
        if (this.ertek==false) {
            this.elem.css("background-color", "orange");
        } else {
            this.elem.css("background-color", "green");
        }
    }
    #kattintasTrigger() {
        const EVENT = new CustomEvent("kapcsolas", {
            detail : this,
        });
        window.dispatchEvent(EVENT);
    }
    getIndex(){
        return this.#index
    }
}
export default LampaElem;
