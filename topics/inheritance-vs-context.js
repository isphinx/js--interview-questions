// What is the output? Fix code
var person = {
  name: "Sam",
  hello: function() {
    alert(this.name);
  }
};

var hello = person.hello;
hello(); // Make it to output "Sam"

// What is the output?
var fn = {};
function valueAccessor(value) {
  var accessor = function(newValue) {
    if(arguments.length === 0) {
      return value;
    }
    value = newValue;
  };
  accessor.__proto__ = fn;
  return accessor;
}
var a = valueAccessor(5);
fn.incrementValue = function() { this(this() + 1); };
a.incrementValue();
a();

// Update code for conditions
function A() {
  this.value = 1;
}
var B = function() {} ;
/* put your code here */
var b = new B;
b.value === undefined; // should be true
b instanceof A; // should be true

// Explain the difference
function User(name) {
  this.name = name;
  this.hello = function() {
    alert(this.name);
  }
}
// -- vs -- ( what is the difference ?)
function User(name) {
  this.name = name;
}
User.prototype.hello = function() {
  alert(this.name);
};

// What is the output? Fix code
Logger = function(logFn) {
  _logFn = logFn;
  this.log = function(message) {
    _logFn(new Date() + ": " + message);
  }
};
var logger = new Logger(console.log);
logger.log("Hi!");
logger.log("Wazzup?");

// Explain difference between .call/.apply/.bind

// Create .bind polyfill