const {Circle, Square, Triangle} = require('../lib/shape');

describe('Circle', () => {
    it('Renders a Circle', () => {
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<circle r="65" fill= "yellow" />');

    });
  });

  describe('Square', () => {
    it('Renders a Square', () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual('<rect x="100" y="60" width="200" height="200" fill="purple" />');

    });
  });

  describe('Triangle', () => {
    it('Renders a Triangle', () => {
        const shape = new Triangle();
        shape.setColor("orange");
        expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="orange" />');

    });
  });