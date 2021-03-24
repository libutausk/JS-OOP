// 1. sukurti konstruktoriaus funkciją 'notebook'. 'notebook' turi 2 parametrus: totalPages, usedPages

function Notebook(totalPages, usedPages){
    this.totalPages = totalPages;
    this.usedPages = usedPages;
}

// 2. sukurti metodą use kuris panaudotus puslapius padidina nurodytu kiekiu puslapių ir naują panaudotų puslapių puslapių skaičių atspausdina konsolėje

Notebook.prototype.use = function(number){
    this.usedPages += number;
    console.log(this.usedPages);
}

// 3. sukurti metodą leftPages kuris paskaičiuoja kiek laisvų puslapių liko ir atsakymą atspausdina konsolėje

Notebook.prototype.leftPages = function(){
    console.log(this.totalPages - this.usedPages);
}

// 4. sukurti du notebook objektus (instances): first ir second ir juos atspausdinti 

const first = new Notebook(500, 100);
const second = new Notebook(350, 150);
console.log(first);
console.log(second);

// 5. su abiem objektais išbandyti use ir leftPages metodus su abiem objektais.

first.leftPages();
second.leftPages();
first.use(53);
second.use(57);

// 1. perkurti 1 užduoties kodą šį kartą naudojant ES6 klases
// 2. pridėti getter metodą getInfo kuris konsolėje atspausdina tokį sakinį: this notebook has total pages of \totalPages\. Used pages: \usedPages\ (pasvirieji brūkšniai žymi kur rašomos kintamojo rekšmės)
// 3. pridėti setter metodą add kuris leidžia į notebook prie esamų pridėti naujus tuščius puslapius (puslapių skaičius perduodamas parametru), bei atspausdina totalPages;

class NotebookNew {
    
    constructor(totalPage, usedPage){
        this.totalPage = totalPage;
        this.usedPage = usedPage;
    }
    
        get getInfo(){
        console.log(`This notebook has total pages of ${this.totalPage}. Used pages ${this.usedPage}`);
    }
        set add(num){
        console.log(`This notebook has now total pages of ${this.totalPage+num}.`);
        }
}
const third = new NotebookNew(533, 189);
third.getInfo;
third.add=3;

// papildoma:
// jei pavyko greitai įgyvendinti pirmąją dalį, papildoma užduotis:
// perkurti 1 užduoties (konstruktoriaus funkcijos) kodą su create.object

const noteBookObjectCreate = {
    printAll(){
        console.log(`This notebook has total pages of ${this.allPages} and used pages of ${this.readPages}`);
    },
    pages(allPages, readPages) {
        this.allPages = allPages;
        this.readPages = readPages;
    }
}

const fourth = Object.create(noteBookObjectCreate);
fourth.pages(777, 555);
fourth.printAll; //Kazkodel nespausdina 63 eilutes..
console.log(fourth); 

// naudojant visus 3 būdus (atskirai, pirma per kontruktoriaus funkciją, tuomet per ES6 klases, galiausiai per object.create):
// 1. sukurti klasę 'Vehicle', kuri turi 2 parametrus: wheelCount, speed(km/h)
// 2. sukurti metodą addSpeed kuris prideda prie esamo speed greičio 10km/h
// 3. sukurti metodą break kuris nuima nuo esamo greičio 5(km/h)
// 4. sukurti klases 'car' ir 'bicycle' kurios paveldi esamus 'vehile' metodus ir parametrus

//Per kontruktoriaus funkciją:
function vehicle1 (wheelCount, speed){
    this.wheelCount = wheelCount;
    this.speed = speed;
}
vehicle1.prototype.addSpeed = function(){
    this.speed += 10;
}
vehicle1.prototype.break = function(){
    this.speed -= 5;
}
const Car1 = function (wheelCount, speed){
    vehicle1.call(this, wheelCount, speed);
}
Car1.prototype = Object.create(vehicle1.prototype);
Car1.prototype.blink = function(){
    console.log('blink blink');
}

const Bicycle1 = function (wheelCount, speed){
    vehicle1.call(this, wheelCount, speed);
}
Bicycle1.prototype = Object.create(vehicle1.prototype);
Bicycle1.prototype.beep = function(){
    console.log('beep beep');
}
//Per ES6 klases:
class vehicle2 {
    constructor(wheelCount, speed){
        this.wheelCount = wheelCount;
        this.speed = speed;
    }
    addSpeed(){
        this.speed += 10;
    }
    break(){
        this.speed -= 5;
    }
}
class Car2 extends vehicle2 {
    constructor(wheelCount, speed){
        super(wheelCount, speed)
    }
    blink(){
        console.log('blink blink');
    }
}
class Bicycle2 extends vehicle2 {
    constructor(wheelCount, speed){
        super(wheelCount, speed)
    }
        beep(){
        console.log('beep beep');
    }
}
//Per object.create:
const vehicle3 = {
    addSpeed(){
        this.speed += 10;
    },
    break(){
        this.speed -= 5;
},
    parameters(wheelCount, speed){
        this.wheelCount = wheelCount;
        this.speed = speed;
    }
}

const newVehicle = Object.create(vehicle3);

const Car3 = Object.create(vehicle3);
Car3.parameters = function (wheelCount, speed){
    vehicle3.parameters.call(this, wheelcount, speed);
}
Car3.blink = function (){
    console.log('blink blink');
}

const Bicycle3 = Object.create(vehicle3);
Bicycle3.parameters = function (wheelCount, speed){
    vehicle3.parameters.call(this, wheelcount, speed);
}
Bicycle3.beep = function (){
    console.log('beep beep');
}



