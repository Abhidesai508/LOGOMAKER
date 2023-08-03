class Shapes {
    constructor(){
        this.shapeColor = '';
    }
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
}
//shape parameters 
class Circle extends Shapes {
render() {
    return `<circle r="65" fill= "${this.shapeColor}" />`
}
}

class Square extends Shapes {
    render () {
        return `<rect x="100" y="60" width="200" height="200" fill="${this.shapeColor}" />`
    }
};

class Triangle extends Shapes {
    render () {
        return `<polygon points="0,200 300,200 150,0" fill="${this.shapeColor}" />`
    }
}
//send info out
module.exports = {Circle, Square, Triangle };