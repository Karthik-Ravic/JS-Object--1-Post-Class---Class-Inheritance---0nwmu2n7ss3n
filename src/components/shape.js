// declare class
class Shape {
    constructor(color) {
        this.color = 'color';
    }
    drawShape(){
        console.log('shape');
    }
    calculateArea() {
        console.log('area');
    }
}
// export class using module.exports
module.exports = Shape;