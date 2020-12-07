class Karakter {
    // OSZTÁLYVÁLTOZÓK
    /*
    Ezeket egyébként nem muszáj így leírni, elég lenne csak a constuctor-ban, de mivel
    a C# ehhez áll közelebb, ezért így írtam.
    */
    ero = 0;
    egeszseg = 0;
    kitartas = 0;

    // KONSTRUKTOR
    /*
     Azonnal lefut amint egy példányosítás történik, dolgok előbeállítására szolgál.
     A this kulcssó az osztály saját változójára mutat (pl.: this.ero).
    */
    constructor(ero, egeszseg, kitartas){
        this.ero = ero;
        this.egeszseg = egeszseg;
        this.kitartas = kitartas;
    }

    // METÓDUSOK
    /* 
    A viselkedést írják le. 
    Egy metódus lehet függvény (visszatérési értékkel, pl.: getKitartas()) 
    vagy eljárás (visszatérési érték nélkül pl.: addEro())
    */
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
    /*
    Ez az eljárás arra szolgál, hogy ha változás történik az oldalon, 
    akkor meg kell hívnunk, és megváltoztatja a HTML beli értékeket is.
    Lásd.: https://www.w3schools.com/js/js_htmldom.asp
    */
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