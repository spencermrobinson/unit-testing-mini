module.exports = {
    returnTwo: function() {
      return 2;
    },
    
    greeting: function( name ) {
      return `Hello, ${ name }.`;
    },
  
    add: function( num1, num2 ) {
      return num1 + num2;
    },

    divide: function(num1, num2){
        return num1 / num2
    },

    cubed: function(num1){
        return (num1 * num1) * num1
    }
  };