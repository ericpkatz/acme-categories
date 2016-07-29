var expect = require('chai').expect;

var DB = require('../db');

describe('DB', function(){
  beforeEach(function(){
    DB.reset();
  });

  it('exists', function(){
    expect(DB).to.be.ok;
  });

  it('can add product', function(){
    DB.addProduct('spyware', { name: 'binoculars' });
    expect(DB.categories()).to.eql(['spyware']);
  });

  it('can get a category', function(){
    var binocular = { name: 'binoculars' };
    DB.addProduct('spyware', binocular );
    expect(DB.category('spyware')).to.eql([binocular]);
  });

  it('can delete a category', function(){
    var binocular = { name: 'binoculars' };
    DB.addProduct('spyware', binocular );
    DB.deleteCategory('spyware');
    expect(DB.category('spyware')).to.not.be.ok;
  });

  it('can delete a category', function(){
    var binocular = { name: 'binoculars' };
    DB.addProduct('spyware', binocular );
    DB.deleteProduct('spyware', 0);
    expect(DB.category('spyware')).to.eql([]);
  });

});
