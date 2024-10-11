
function addGame(name, innerName){
  let link = document.createElement("div")
  link.innerHTML = `<a href = "runner.html?name=${name}&url=./games/${innerName}"><img src = "./games/${innerName}/favicon.png" style = "width: 10vw;"> <br/> ${name} <br/> </a>`
  link.style.display = "inherit"
  link.style.marginTop = "4vh"
  document.body.appendChild(link)
}
addGame("1v1.LOL", "1v1")
addGame("1v1.LOL (Classic)","1v1c")
addGame("2048", "2048")
addGame("Agar.io", "agario")
addGame("Breaklock", "breaklock")
addGame("Cookie Clicker", "click")
addGame("EaglerCraft (MC 1.5.2)", "ec")
addGame("EaglerCraft Alpha (MC Alpha 1.2.6)", "eca")
addGame("EaglerCraft Beta (MC Beta 1.3)", "ec13")
addGame("EaglerCraft Beta (MC Beta 1.7.3)", "ecb173")
addGame("EaglerCraft Indev (MC Indev)", "ecin")
addGame("EaglerCraftX (MC 1.8.8)", "ecx")
addGame("JustFall.LOL", "jfall")
addGame("Madalin Stunt Cars 2", "msc2")
addGame("Madalin Stunt Cars 3", "msc3")
addGame("OvO","ovo")
addGame("Radius Raid", "raid")
addGame("Retro Bowl","rbowl")
addGame("Run 3", "run3")
addGame("Slope", "slope")
addGame("Super Mario 64", "sm64")
addGame("Tunnel Rush", "trush")
