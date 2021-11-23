
document.body.onload = () => {
    drawCanvas()
}

function drawCanvas(){
    const canvas = document.getElementById("myCanvas")
    const ctx = canvas.getContext("2d")

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Espilhos UP
    ctx.beginPath();
    ctx.fillStyle = '#008080'
    ctx.moveTo(0,0)
    for (let coordX = 20; coordX <= 400 ; coordX += 20) {
        if (coordX%40) {
            ctx.lineTo(coordX,20)
        }
        else {
            ctx.lineTo(coordX,0)
        }
    }
    ctx.fill()

    // Espilhos DOWM
    ctx.beginPath();
    ctx.moveTo(0,400)
    for (let coordX = 20; coordX <= 400 ; coordX += 20) {
        if (coordX%40) {
            ctx.lineTo(coordX,380)
        }
        else {
            ctx.lineTo(coordX,400)
        }
    }
    ctx.fill()

    // Espilhos LEFT
    ctx.beginPath();
    ctx.moveTo(0,0)
    for (let coordY = 20; coordY <= 400 ; coordY += 20) {
        if (coordY%40) {
            ctx.lineTo(20,coordY)
        }
        else {
            ctx.lineTo(0,coordY)
        }
    }
    ctx.fill()

    // Espilhos RIGHT
    ctx.beginPath();
    ctx.moveTo(400,0)
    for (let coordY = 20; coordY <= 400 ; coordY += 20) {
        if (coordY%40) {
            ctx.lineTo(380,coordY)
        }
        else {
            ctx.lineTo(400,coordY)
        }
    }
    ctx.fill()


    retanguloGeral(25,25)
    retanguloGeral(145,25)
    retanguloGeral(265,25)
    retanguloGeral(25,145)
    retanguloGeral(145,145)
    retanguloGeral(265,145)
    retanguloGeral(25,265)
    retanguloGeral(145,265)
    retanguloGeral(265,265)



    function retanguloGeral(coordX,coordY) {
        ctx.fillStyle = '#606060'
        ctx.fillRect(coordX, coordY, 110, 110);
        ctx.clearRect(coordX+10, coordY+10, 90, 90);
        ctx.strokeStyle = '#004000'
        ctx.strokeRect(coordX+20, coordY+20, 70, 70);
        ctx.beginPath()
        ctx.fillStyle = '#004040'
        ctx.arc(coordX+55, coordY+55,30,0,2*Math.PI)
        ctx.fill()
    }

    const rangePincel = document.getElementById("")
    
    canvas.onauxclick = (ev) => {

        document.oncontextmenu=new Function("return false")
        
        const posX = ev.clientX-((window.innerWidth-400)/2)
        const posY = ev.clientY-((window.innerHeight-400)/2)
        console.log(ev.clientX,ev.clientY, posX, posY)

        ctx.beginPath()
        ctx.fillStyle = "#FFFFFF"
        ctx.clearRect(posX-10, posY-10,30,30)
        // ctx.arc(posX, posY,15,0,2*Math.PI)
        ctx.fill()
    }

    canvas.onclick = (ev) => {

        document.oncontextmenu=new Function("return false")
        
        const posX = ev.clientX-((window.innerWidth-400)/2)
        const posY = ev.clientY-((window.innerHeight-400)/2)
        console.log(ev.clientX,ev.clientY, posX, posY)

        ctx.beginPath()
        const colorPaint = document.getElementById("inputcolor").value
        ctx.fillStyle = colorPaint
        ctx.arc(posX, posY,15,0,2*Math.PI)
        ctx.fill()
    }


}

document.getElementById("resetCanvas").onclick = () => {
    drawCanvas()
}


