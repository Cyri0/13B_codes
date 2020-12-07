class Karakter {
    // OSZTÁLYVÁLTOZÓK
    ero = 0;
    egeszseg = 0;
    kitartas = 0;

    // KONSTRUKTOR
    constructor(ero, egeszseg, kitartas){
        this.ero = ero;
        this.egeszseg = egeszseg;
        this.kitartas = kitartas;
    }

    // METÓDUS
    addEro(){
        this.ero += 5;
    }

    getEro(){
        return this.ero;
    }

    addKitartas(){
        this.kitartas += 5;
    }

    getKitartas(){
        return this.kitartas;
    }

    changeEgeszseg(szam){
        if(this.egeszseg <= 100 && this.egeszseg > 0){
            this.egeszseg += szam;

            if(this.egeszseg > 100) this.egeszseg = 100;
            if(this.egeszseg <= 0)
                {
                    this.egeszseg = 0;
                    this.halal();
                }
        }
    }

    getEgeszseg(){
        return this.egeszseg;
    }

    halal(){
        alert("Meghaltál!");
    }
}

let john = new Karakter(5, 100, 5);

function frissites(){
    document.getElementById("ero").innerHTML = john.getEro();
    document.getElementById("kitartas").innerHTML = john.getKitartas();
    document.getElementById("egeszseg").innerHTML = john.getEgeszseg();
}

frissites();

function sebzes(){
    john.changeEgeszseg(-8);
    frissites();
}

function gyogyitas(){
    john.changeEgeszseg(20);
    frissites();
}