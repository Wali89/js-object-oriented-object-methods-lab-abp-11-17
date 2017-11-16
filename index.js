function BoardMember(name, homestate, training) {
  this.name = name;
  this.homestate = homestate;
  this.training = training;
  this.veto = function veto() {
    returns "No, I must disagree";
  }
}