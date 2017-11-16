function BoardMember(name, home state, training) {
  this.name = name;
  this.home state = home state;
  this.training = training;
  this.veto = function veto() {
    return "No, I must disagree";
  }
  this.approve = function approve() {
    return "You can do that!";
  }
  this.doCharity = function charity() {
    return "I like to help people.";
  }
  this.releasePressStatement = function releasePressStatement() {
    return "You will see great things from Scuber.";
  }
  this.sayHi = function sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homestate + ", and I was trained in " + this.training + ".";
  }
}
