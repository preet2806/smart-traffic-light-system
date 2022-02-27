let streets = [];
let cars = [];
let carsonstreet = 10;
let intersections =[];
function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
let myVar;
window.onload = () => {
    start();
}
class Car {
    constructor(cname) {
      this.name = cname;
      this.longitude = getRandomNumberBetween(0,70);
      this.lattitude = getRandomNumberBetween(0,70);
      this.onstreet = false;
    }
    getDetails(){
        return (`The position of of ${this.name} is ${this.lattitude},${this.longitude}.`)
    }
}
class Intersection{
    constructor(name,lnorth,lsouth,least,lwest){
        this.count = 0;
        this.name = name;
        this.lanes = [lnorth,least,lsouth,lwest];
        this.activelane = [this.lanes[this.count],20];
    }
    changeLights(){
        this.count++;
        this.count=this.count%4;
        this.activelane[0] = this.lanes[this.count];
        for(i=0;i<4;i++){
            this.lanes[i].light = 'red';
        }
        var lanetime = 10;
        for(var j=0;j<cars.length;j++){
            if(isonstreet(cars[j])==this.activelane[0]){
                lanetime+2;
                console.log(lanetime);
            }
        }
        if(lanetime>60){
            lanetime=60;
        }
        this.activelane.light = 'green';
        this.activelane[1] = lanetime;
        var timer = lanetime*1000;
        if(lanetime>10){
            setTimeout(this.changeLights(), timer);
        }
        
    }
}
class Lane {
    constructor(name,slatt,elatt,slong,elong,dir) {
        this.name = name;
        this.slongitude = slong;
        this.slattitude = slatt;
        this.elongitude = elong;
        this.elattitude = elatt;
        this.direction = dir;
        this.light = 'red';
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

    let l1w = new Lane('lane_1_west',30,40,20,30,'west');
    streets.push(l1w);
    let l1e = new Lane('lane_1_east',0,10,10,20,'east');
    streets.push(l1e);
    let l1s = new Lane('lane_1_south',10,20,30,40,'south');
    streets.push(l1s);
    let l1n = new Lane('lane_1_north',20,30,0,10,'north');
    streets.push(l1n);
    let l2w = new Lane('lane_2_west',60,70,20,30,'west');
    streets.push(l2w);
    let l2e = new Lane('lane_2_east',30,40,10,20,'east');
    streets.push(l2e);
    let l2s = new Lane('lane_2_south',40,50,30,40,'south');
    streets.push(l2s);
    let l2n = new Lane('lane_2_north',50,60,0,10,'north');
    streets.push(l2n);
    let l3w = new Lane('lane_3_west',30,40,50,60,'west');
    streets.push(l3w);
    let l3e = new Lane('lane_3_east',0,10,30,40,'east');
    streets.push(l3e);
    let l3s = new Lane('lane_3_south',10,20,60,70,'south');
    streets.push(l3s);
    let l3n = new Lane('lane_3_north',20,30,30,40,'north');
    streets.push(l3n);
    let l4e = new Lane('lane_4_east',30,40,40,50,'east');
    streets.push(l4e);
    let l4s = new Lane('lane_4_south',40,50,60,70,'south');
    streets.push(l4s);
    let l4w = new Lane('lane_4_west',60,70,0,10,'west');
    streets.push(l4w);
    let l4n = new Lane('lane_4_north',50,60,40,50,'north');
    streets.push(l4n);
    for(i=0;i<500;i++){
        var num = i.toString();
        var cname = 'car';
        cname += num;
        let car = new Car(cname);
        cars.push(car);
    }
    for(i=0;i<cars.length;i++){
        console.log(cars[i].getDetails());

    }
    let inter1 = new Intersection('inter1',l1n,l1s,l1e,l1w);
    let inter2 = new Intersection('inter2',l2n,l2s,l2e,l2w);
    let inter3 = new Intersection('inter3',l3n,l3s,l3e,l3w);
    let inter4 = new Intersection('inter4',l4n,l4s,l4e,l4w);
    intersections.push(inter1);
    intersections.push(inter2);
    intersections.push(inter3);
    intersections.push(inter4);
}
function movecars(){
    for(i=0;i<streets.length;i++){
        if(streets[i].light=='green'){
            for(j=0;j<cars.length;j++){
                if(isonstreet(cars[j])==streets[i]){
                    if(streets[i].direction=='north'){
                        cars[j].lattitude++;
                    }
                    else if(streets[i].direction=='south'){
                        cars[j].lattitude--;
                    }
                    else if(streets[i].direction=='east'){
                        cars[j].longitude++;
                    }
                    else{
                        cars[i].longitude--;
                    }
                }
            }
        }
    }
}
function run(){
    for(i=0;i<4;i++){
        intersections[i].changeLights();
    }
    myVar = window.setInterval(movecars(), 1000);
}
  