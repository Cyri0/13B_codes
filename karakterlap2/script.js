class Karakter {
    // OSZTÁLYVÁLTOZÓK
    szint;
    elet;
    ero;
    kitartas;

    // KONSTRUKTOR
    constructor (szint, ero, kitartas){
        this.ero = ero;
        this.elet = kitartas * 10;
        this.kitartas = kitartas;
        this.szint = szint;
    }
    
    // METÓDUSOK
    addEro(){
        this.ero++;
    }

    addKitartas(){
        this.kitartas++;
        this.elet = this.kitartas * 10;
    }

    changeElet(szam){
        this.elet += szam;

        if(this.elet > this.kitartas * 10){
            this.elet = this.kitartas * 10;
        }
        if(this.elet < 0 ){
            this.elet = 0;
        }
    }

    getEro(){
        return this.ero;
    }

    getKitartas(){
        return this.kitartas;
    }

    getElet(){
        return this.elet;
    }
    getSzint(){
        return this.szint;
    }
}

let janos = new Karakter(1, 5, 10);

console.log(janos);

function frissites(){
    document.getElementById("ero").innerHTML = janos.getEro();
    document.getElementById("kitartas").innerHTML = janos.getKitartas();
    document.getElementById("elet").innerHTML = janos.getElet();
}

frissites();

function sebzes(szam){
    janos.changeElet(-1*szam);
    frissites();
}

function gyogyitas(szam){
    janos.changeElet(szam);
    frissites();
}

function addEro(){
    janos.addEro();
    frissites();
}

function addKitartas(){
    janos.addKitartas();
    frissites();
}