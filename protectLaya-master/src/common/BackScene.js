export default class BackScene extends Laya.Script {
    onEnable() {
        console.log(111, Laya.Scene.unDestroyedScenes)
        // function rep2(arr) {
        //     for (var i = 0; i < arr.length; i++) {
        //         if (arr.indexOf(arr[i].runtime) != i) {
        //             arr.splice(i, 1);//删除数组元素后数组长度减1后面的元素前移
        //             i--;//数组下标回退
        //         }
        //     }
        //     return arr;
        // }
        var arr = []
        let textArr = []

        for (var i = 0; i < Laya.Scene.unDestroyedScenes.length; i++) {
            if (textArr.indexOf(Laya.Scene.unDestroyedScenes[i].url) == -1) {
            
                arr.push(Laya.Scene.unDestroyedScenes[i])
            }
        }
        console.log(arr)


        // this.nearry = rep2(Laya.Scene.unDestroyedScenes)
        // console.log(222, this.nearry)
        // console.log(this.nearry)
        this.len =arr.length - 2
        this.url =arr[this.len]
        // console.log(this.url.url)

    }
    onClick() {
        Laya.Scene.open(this.url.url);
    }
}