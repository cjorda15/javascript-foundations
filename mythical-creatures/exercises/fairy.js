const VENGEFUL = 'Vengeful'
const NOT_VENGEFUL = 'Good natured'
const BAD_CHILD_DISPOSTION = 'Malicious'
const ORGINAL_DUST = 10
const ORIGINAL_DRESS = 'Iris'

module.exports  = function Fairy(name){
  this.name = name
  this.dust = ORGINAL_DUST
  this.clothes = {dresses: [ORIGINAL_DRESS]}
  this.disposition = NOT_VENGEFUL
  this.humanWards= []

  this.receiveBelief = ()=> this.dust++


  this.believe = () => this.dust = this.dust+10

  this.makeDresses = (dresses) => this.clothes.dresses = [...this.clothes.dresses, ...dresses]

  this.provoke = () => this.disposition = VENGEFUL

  this.isVengeful = () =>this.disposition === VENGEFUL

  this.shouldChangeDisposition = () => this.humanWards.length>=3

  this.replaceInfant = child => {
    if(this.isVengeful()){
      child.disposition = BAD_CHILD_DISPOSTION
      this.humanWards.push(child)
    }
  if(this.shouldChangeDisposition())this.disposition = NOT_VENGEFUL
  return child
 }
}
