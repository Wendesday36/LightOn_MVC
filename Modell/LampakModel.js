class LampakModel{
   
    #meret
    #db
    #lepes
    #allapot
    #allapoLista;
    constructor() {
      this.#allapot = true
      this.#lepes = 0
      this.#meret=this.meret
      this.meret = 3
      this.#allapoLista = [false,false,false,false,false,false,false,false,false];
      //kattintasok szama >9 vege a jateknak
      //gyozelem figyeles
        this.#setAllapotLista()
    }
  
    setAllapot(index) {
      if (this.#allapoLista[index] === true) {
        this.#allapoLista[index] = false;
  
      } else {
        this.#allapoLista[index] = true;
      }
      this.#allapoLista[index]= this.#allapot
      console.log(this.#allapoLista)
      this.#lepes++;
      
    }
    #setAllapotLista() {
    
        for (let index = 0; index < this.#allapoLista.length; index++) {
          const szam = Math.floor(Math.random() * 2) ;
          if (szam == 1) {
            this.#allapoLista[index] = true;
          } else {
            this.#allapoLista[index] = false;
          }
        }
      }


getlist(){
    return this.#allapoLista;
}
getErtek() {
  return this.#allapot;
}
}
export default LampakModel