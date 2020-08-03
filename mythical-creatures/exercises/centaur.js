module.exports = class Centaur{
  constructor({name,type}){
    this.name = name
    this.breed = type
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.energy = 3
  }

  shouldUseEnergy(){
    return !this.standing||this.cranky
  }

  shoot(){
    this.useEnergy()
    return this.shouldUseEnergy()? 'NO!': 'Twang!!!'
  }

  run(){
    this.useEnergy()
    return this.shouldUseEnergy()? 'NO!': 'Clop clop clop clop!!!'
  }

  sleep(){
    if(this.standing){
      return 'NO!'
    }else{
      this.cranky= false
      this.energy = 3
      return "ZZZZ"
    }
  }

  layDown(){
    this.standing = false
    this.layingDown = true
  }

  standUp(){
    this.standing = true
    this.layingDown = false
  }

  drinkPotion(){
    this.cranky = !this.cranky
    if(!this.standing)  return 'Not while I\'m laying down!'
  }

  useEnergy(){
    this.energy = this.energy-1
    this.cranky = this.energy <= 0
  }
}
