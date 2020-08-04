module.exports = class Centaur{
  constructor({name,type}){
    this.name = name
    this.breed = type
    this.cranky = false
    this.standing = true
    this.layingDown = false
    this.energy = 3
  }

  shoot(){
    return this.useEnergy()? 'NO!': 'Twang!!!'
  }

  run(){
    return this.useEnergy()? 'NO!': 'Clop clop clop clop!!!'
  }

  sleep(){
    return this.standing?'NO!':(
      this.cranky= false,
      this.energy = 3,
      "ZZZZ"
    )
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
    return (this.cranky = this.energy <= 0 )|| !this.standing
  }
}
