export default class tuodong extends Laya.Script{
    constructor(){super()}
    onEnable() {
        this.cx
        this.cy 
        this.owner.on(Laya.Event.MOUSE_DOWN, this, function () {
            this.cx = Laya.stage.mouseX -this.owner.x
            this.cy = Laya.stage.mouseY -this.owner.y        
            console.log(this.cx)
        })
        this.owner.on(Laya.Event.MOUSE_UP, this, function () {
            console.log(22)
        })
        this.owner.on(Laya.Event.MOUSE_MOVE, this, function () {
            this.owner.pos(Laya.stage.mouseX-this.cx, Laya.stage.mouseY-this.cy)
        })
    }
}