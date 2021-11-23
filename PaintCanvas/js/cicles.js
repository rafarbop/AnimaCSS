
document.body.onload = () => {
    drawCanvas()
}

const canvas = document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

function drawCanvas(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "hsl(188, 51%, 55%)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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
        ctx.fillStyle = 'hsl(188, 60%, 35%)'
        ctx.fillRect(coordX, coordY, 110, 110);
        ctx.fillStyle = "hsl(188, 51%, 55%)"
        ctx.fillRect(coordX+10, coordY+10, 90, 90);
        ctx.strokeStyle = '#004000'
        ctx.strokeRect(coordX+20, coordY+20, 70, 70);
        ctx.beginPath()
        ctx.fillStyle = '#004040'
        ctx.arc(coordX+55, coordY+55,30,0,2*Math.PI)
        ctx.fill()
    }

    const rangePincel = document.getElementById("inputrange")
    
    canvas.oncontextmenu=new Function("return false")
    
    document.onkeydown = (evKey) => {

        console.log(evKey.key)

        if (evKey.key == 'Escape'){
            console.log(evKey.key == 'Escape')
            stopPaintAndApagar()
        }
        if (evKey.key.toLowerCase() == 'a'){
            apagarCanvas()
        }
        if (evKey.key.toLowerCase() == 'p'){
            pintarCanvas()
        }
        if (evKey.key = '+'){
            if (rangePincel.value < 60){
                rangePincel.value++
            }
        }
        if (evKey.key = '-'){
            if (rangePincel.value > 10){
                rangePincel.value--
            }
        }
        
        function apagarCanvas(){
            canvas.onmousemove = (ev) => {
        
                document.oncontextmenu=new Function("return false")
                
                if (evKey.key == 'Escape'){
                    return;
                }
                const posX = ev.clientX-canvas.getBoundingClientRect().x
                const posY = ev.clientY-canvas.getBoundingClientRect().y
                console.log(ev.clientX,ev.clientY, posX, posY)
        
                ctx.beginPath()
                ctx.fillStyle = "#FFFFFF"
                ctx.clearRect(posX-20, posY-20,rangePincel.value,rangePincel.value)
                ctx.fill()
            }
        }

        function pintarCanvas(){
            canvas.onmousemove = (ev) => {
            const posX = ev.clientX-canvas.getBoundingClientRect().x
            const posY = ev.clientY-canvas.getBoundingClientRect().y
            const colorPaint = document.getElementById("inputcolor").value
            console.log(posX, posY,ev.movementX,ev.movementY)
            
            ctx.beginPath()
            ctx.lineWidth = rangePincel.value
            ctx.strokeStyle = colorPaint
            ctx.moveTo(posX-ev.movementX,posY-ev.movementY)
            ctx.lineTo(posX, posY)
            ctx.stroke()

            ctx.beginPath()
            ctx.fillStyle = colorPaint
            ctx.arc(posX, posY,rangePincel.value/2,0,2*Math.PI)
            ctx.fill()
            }
        }

        function stopPaintAndApagar() {
            canvas.onmousemove = () => {
                return;
            }
        }
    }

    document.getElementById("savePNGCanvas").onclick = () => {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = 'CanvasDesenho.png';
        document.body.appendChild(a);
        a.click();
    }

}

document.getElementById("resetCanvas").onclick = () => {
    window.location.reload()
}



