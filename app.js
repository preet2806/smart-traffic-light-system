let streets = [];
let cars = [];
let carsonstreet = [];
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
window.onload = () => {
    start();
}
class Car {
    constructor(cname) {
      this.name = cname;
      this.longitude = getRandomNumberBetween(0,60);
      this.lattitude = getRandomNumberBetween(0,60);
      this.onstreet = false;
    }
    getDetails(){
        return (`The position of of ${this.name} is ${this.lattitude},${this.longitude}.`)
    }
}
class Street {
    constructor(name,slatt,elatt,slong,elong,dir) {
        this.name = name;
        this.slongitude = slong;
        this.slattitude = slatt;
        this.elongitude = elong;
        this.elattitude = elatt;
        this.direction = dir;
    }
      getDetails(){
          return (`The position of ${this.name} is ${this.slongitude},${this.elattitude}.`)
    }
}
function isonstreet(car){
    for(i=0;i<streets.length;i++){
        if(streets[i].slongitude<car.longitude && car.longitude<streets[i].elongitude && streets[i].slattitude<car.lattitude && car.lattitude<streets[i].elattitude){
            car.onstreet = true;
            return streets[i];
        }
    }
    car.onstreet = false;
    return null;
}
function start(){
    let streeth1 = new Street('Horizontal1',15,35,0,60,'horizontal');
    streets.push(streeth1);
    let streeth2 = new Street('Horizontal2',40,52,0,60,'horizontal');
    streets.push(streeth2);
    let streetv1 = new Street('Vertical1',0,60,10,20,'vertical');
    streets.push(streetv1);
    let streetv2 = new Street('Vertical2',0,60,25,35,'vertical');
    streets.push(streetv2);
    let streetv3 = new Street('Vertical3',0,60,45,55,'vertical');
    streets.push(streetv3);
    for(i=0;i<10;i++){
        var num = i.toString();
        var cname = 'car';
        cname += num;
        let car = new Car(cname);
        cars.push(car);
    }
    for(i=0;i<cars.length;i++){
        console.log(cars[i].getDetails());

    }
    
}
function movecars(){
    for(i=0;i<carsonstreet.length();i++){
        var currstreet = getstreet(carsonstreet[i]);

    }
}
function run(){
    for(i=0;i<cars.length;i++){
        if(isonstreet(cars[i])!=null){
            carsonstreet.push(cars[i]);
        }
    }
    
}
  