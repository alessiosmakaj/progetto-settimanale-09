interface Smartphone {
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class FirstUser implements Smartphone {
  private carica: number;
  private numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Hai finito i soldi, ricarica t-rex che non sei altro");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class SecondUser implements Smartphone {
  private carica: number;
  private numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Hai finito i soldi, ricarica t-rex che non sei altro");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class ThirdUser implements Smartphone {
  private carica: number;
  private numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (costoChiamata <= this.carica) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Hai finito i soldi, ricarica t-rex che non sei altro");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const firstUser: Smartphone = new FirstUser();
const secondUser: Smartphone = new SecondUser();
const thirdUser: Smartphone = new ThirdUser();

firstUser.ricarica(10);
firstUser.chiamata(3.5);
firstUser.chiamata(2);
console.log("Saldo residuo FirstUser:", firstUser.numero404());
console.log(
  "Numero di chiamate effettuate da FirstUser:",
  firstUser.getNumeroChiamate()
);

secondUser.ricarica(20);
secondUser.chiamata(5);
console.log("Saldo residuo SecondUser:", secondUser.numero404());
console.log(
  "Numero di chiamate effettuate da SecondUser:",
  secondUser.getNumeroChiamate()
);

thirdUser.ricarica(5);
thirdUser.chiamata(10);
console.log("Saldo residuo ThirdUser:", thirdUser.numero404());
console.log(
  "Numero di chiamate effettuate da ThirdUser:",
  thirdUser.getNumeroChiamate()
);
