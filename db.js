var _data = {
  SpyWare: [
    { name: 'Glass Tumbler' }
  ],
  Stationary: [
    { name: 'Paper Clips' },
    { name: 'Paper' },
  ]
};
module.exports = {
  reset: function(){
    _data = {};
  },
  data: function(){
    return _data;
  },
  addCategory: function(category){
    this.data()[category] = [];
  },
  addProduct: function(category, product){
    this.data()[category] = this.data()[category] || [];
    this.data()[category].push(product);
  },
  categories: function(){
    return Object.keys(this.data());
  },
  category: function(name){
    return this.data()[name];
  },
  deleteCategory: function(name){
    delete this.data()[name];
  },
  deleteProduct: function(name, idx){
    this.category(name).splice(idx, 1);
  }
};
