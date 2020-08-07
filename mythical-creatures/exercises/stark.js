module.exports = class Start{
  constructor(name,location){
    this.name = name
    this.safe = false
    this.location = location||'Winterfell'
  }

  houseWords(){
    return this.safe?  'The North Remembers':'Winter is Coming'
  }
}
