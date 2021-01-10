
interface Point{ 
    x: number,
    y:number
}


let drawPoint = (point: Point) => { // inline annotions
    //...
    console.log(point.x)

}

drawPoint({
    x:1,
    y:2
})
