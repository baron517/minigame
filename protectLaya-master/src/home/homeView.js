import Controul from "./controul";

export default class homeView extends Laya.Scene {
    constructor() {
        super()
    }
    onEnable() {
        homeView.zhi = this
        this.canMove = false 
        this._control = this.getComponent(Controul);
        this.beginGame.on(Laya.Event.MOUSE_DOWN, this, function () {
            console.log(this._control.enabled)
            this._control.enabled = true;
            this.loseal.visible = false;
            console.log(this._control.enabled)
        })
        this._control.enabled = false

    }
    stopgame() {
        this.loseal.visible = true
        this._control.enabled = false
    }

}