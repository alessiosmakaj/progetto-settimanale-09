"use strict";
class FirstUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        const costoChiamata = minutiDurata * 0.2;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Hai finito i soldi, ricarica t-rex che non sei altro");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class SecondUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        const costoChiamata = minutiDurata * 0.2;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Hai finito i soldi, ricarica t-rex che non sei altro");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
class ThirdUser {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        const costoChiamata = minutiDurata * 0.2;
        if (costoChiamata <= this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Hai finito i soldi, ricarica t-rex che non sei altro");
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const firstUser = new FirstUser();
const secondUser = new SecondUser();
const thirdUser = new ThirdUser();
firstUser.ricarica(10);
firstUser.chiamata(3.5);
firstUser.chiamata(2);
console.log("Saldo residuo FirstUser:", firstUser.numero404());
console.log("Numero di chiamate effettuate da FirstUser:", firstUser.getNumeroChiamate());
secondUser.ricarica(20);
secondUser.chiamata(5);
console.log("Saldo residuo SecondUser:", secondUser.numero404());
console.log("Numero di chiamate effettuate da SecondUser:", secondUser.getNumeroChiamate());
thirdUser.ricarica(5);
thirdUser.chiamata(10);
console.log("Saldo residuo ThirdUser:", thirdUser.numero404());
console.log("Numero di chiamate effettuate da ThirdUser:", thirdUser.getNumeroChiamate());
