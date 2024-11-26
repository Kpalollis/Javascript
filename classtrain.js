class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train4=new Train(red,false)

train4.lightsStatus(); 
train4.getSelf(); 
train4.getPrototype();


class Highspeedtrain extends train{
    constructor(passenger,color,HighspeedOn,lightOn){
        super(color,lightOn)
        this.passenger=passenger;
        this.HighspeedOn=HighspeedOn;
    }
    togglespeed(){
        this.Highspeed = !this.HighspeedOn;
        console.log("the train High speed",this.HighspeedOn)
    }
    toggleLight(){
        this.lightOn= this.lightOn;
        super.toggleLight();
        super.togglestatus();
        console.log("the lights work 100%")
    }
}
var train4 = new train (red,false);
var Highspeed1 = new Highspeedtrain(200,false,"green",false);
train4.toggleLights();
train4.togglestatus();
