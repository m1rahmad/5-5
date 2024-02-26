// class Person {
//     constructor(ism, yosh, gender) {
//         this.name = ism
//         this.age = yosh
//         this.gender = gender
//     }
//     //getter
//     getInfo(){
//         return `Ismi:${this.name}\nYoshi: ${this.age}\nJinsi: ${this.gender}`
//     }
//     //seter
//     setName(name){
//         this.name = name
//     }
// }


// class Men extends Person{
//     constructor(ism, yosh, gender, uylangan){
//         super(ism, yosh, gender)
//         this.married = uylangan
//     }

// }

// let erkak = new Men("Odil", 23, "erkak", false)
// console.log(erkak.getInfo());



// let text = document.querySelector('.text');

// let title = document.querySelector('.title');
// let orgtitle = title.innerHTML
// let fullTitle = ''
// let orgtext = text.innerHTML
// let fulltext = ''

// function typing(num = 0) {
//     fullTitle += orgtitle[num]
//     title.innerHTML = fullTitle
//     num++
//     if(orgtitle != fullTitle) {
//         setTimeout(()=>{
//             typing(num)
//         },100)
//     }
// }
// typing()



class Typing {
    constructor(selector, delay) {
        this.selector = document.querySelector(selector);
        this.orgSelector = this.selector.innerHTML;
        this.fullSelector = "";
        this.delay = delay
        this.type()
    }
    type(num = 0) {
        this.fullSelector += this.orgSelector[num];
        this.selector.innerHTML = this.fullSelector;
        num++;
        if (this.orgSelector != this.fullSelector){
            setTimeout(() => {
                this.type(num);
            }, this.delay);
        }
    }
}
let son1 = prompt("Son kiriting")

let son2 = prompt("Son kiriting")

let title = new Typing (".title", son1 );
let text = new Typing (".text", son2);
