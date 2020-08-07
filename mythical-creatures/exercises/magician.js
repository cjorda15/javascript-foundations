module.exports =  class Magician{
  constructor(obj){
    this.name = obj&&obj.name?obj.name : "Chris"
    this.topHat = obj&&obj.topHat!==undefined?obj.topHat: true
    this.confident = false
    this.spellCount =0

  }

  incantation(spell){
    return `${spell.toUpperCase()}!`
  }

  cast(){
    this.spellCount++
    this.confident = this.spellCount>=3
    return this.topHat? 'PULL RABBIT FROM TOP HAT':'PULL DOVE FROM SLEEVE'
  }

  performShowStopper(){
    return this.confident?'WOW! The magician totally just sawed that person in half!' :'Oh no! Practice more before attempting this trick!'
  }
}
