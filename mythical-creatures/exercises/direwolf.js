module.exports = class Direwolf{
  constructor(name,home,size){
    this.name  = name
    this.home = home||'Beyond the Wall'
    this.size = size||'Massive'
    this.starksToProtect =[]
    this.huntsWhiteWalkers=true
  }

  protect(stark){
    stark.location === this.home&&this.starksToProtect.length<2?
    (
    stark.safe = true,
    this.huntsWhiteWalkers = false,
    this.starksToProtect.push(stark)
    )
    :
    null

  }

  leave(stark){
    let index =  this.starksToProtect.indexOf(stark)
      index  ===-1?
     null
     : this.starksToProtect.splice(index,1)[0].safe = false
  }
}
