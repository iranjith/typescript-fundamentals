import { Actor } from "./interfaces";

export class Performer implements Actor{
    name: string='';
    email  : string='';
    role: string='';

    rehearse(sceneNumber: void): void {
        console.log("Rehearsing scene...");
    }
}

abstract class Video {

    private _producer: string = ''; 
    static medium:string = 'Audio-Visual';
  
    get producer(): string {
      return this._producer.toUpperCase();
    }
  
    set producer(value: string) {
      this._producer = value;
    }
  
    constructor(public title: string, protected year: number) {
      console.log("Video class constructor");
    }
  
    printItem(): void {
      console.log(`Title: ${this.title} released in ${this.year}`);
      console.log(`Medium: ${Video.medium}`);
    }
  
    abstract printCredits(): void;
  }
  
  export class Documentary extends Video {
    constructor(newTitle:string,newYear:number, public subject:string){
      super(newTitle,newYear);
    }
  
    printItem(): void {
      super.printItem();
      console.log(`Subject: ${this.subject} ${this.year}`);
    }
   
    printCredits(): void {
      console.log(`Credits: ${this.title} ${this.year}`);
    
    }
  }
  
  
let Musical= class extends Video{
    printCredits(): void {
      console.log(`Musical Credits: ${this.producer}`);
    }
  }
  
  let vid:Video =new Documentary('The Last Dance',2020,'Basketball');
  vid.title='The Last Dance';
  vid.printCredits();