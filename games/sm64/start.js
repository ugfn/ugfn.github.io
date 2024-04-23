const canvas = document.createElement("canvas")
const button = document.getElementById("button")
canvas.class = "emscripten"
canvas.id = "canvas"
canvas.style.width = "100%"
canvas.style.height = "90%"
function insertScript(src, async = false){
  let script = document.createElement("script")
  script.src = src
  if (async == true){
    script.async = true
  }
  document.body.appendChild(script)
}
function start(){
  document.body.appendChild(canvas)
  insertScript("canvas.js")
  insertScript("sm64.us.f3dex2e.js", true)
  button.hidden = true
}