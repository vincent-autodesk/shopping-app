const assert = require('assert');
const Chart = require('../chart')
const expect = require('chai').expect

const item1 = {id: 1, 
    description: 'nike air force 1', 
    price: 125
} 
const item2 = {id: 2, 
    description: 'yeezy', 
    price: 400
} 
const item3 = {id: 3, 
    description: 'superstar', 
    price: 100
} 
const item4 = {id: 4, 
    description: 'converse chuck', 
    price: 60
}

describe('Chart', function() {
  describe('#add(item)', function() {
    let chart = new Chart()

    it('should add items in chart', function() {
      chart.add(item1)
      chart.add(item2)
      chart.add(item3)
      chart.add(item4)
      assert.equal(chart.size(), 4);
    });

    it('should return error if item already exist', function() {
      expect(chart.add(item1)).to.throw(Error)
    });
  });
});

describe('Chart', function() {
    describe('#remove(id)', function() {
      let chart = new Chart()
  
      it('should remove item with the provided id', function() {
        chart.add(item1)
        chart.remove(item1.id)
        assert.equal(chart.size(), 0);
      });
  
      it('should return error if item does not exist', function() {
        expect(chart.remove(item1.id)).to.throw(Error)
      });
    });
  });

  describe('Chart', function() {
    describe('#modify(item)', function() {
      let chart = new Chart()
  
      it('should modify item based on its id', function() {
        chart.add(item1)
        chart.remove(item1.id)
        assert.equal(chart.size(), 0);
      });
  
      it('should return error if item does not exist', function() {
        expect(chart.remove(item1.id)).to.throw(Error)
      });
    });
  });


    //test modify
    // const modifiedItem1 = {id: 1, 
    //     description: 'yeezy', 
    //     price: 400
    // }
    // chart.modify(modifiedItem1)
    // chart.chart.forEach(item => {
    //     console.log(item)
    // });

