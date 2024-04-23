function addGame(name, innerName){
  let link = document.createElement("a")
  link.innerText = name
  link.target = "_blank"
  link.href = `./runner.html?url=./games/${innerName}&name=${name}`
  document.body.appendChild(link)
}
addGame("1v1.LOL", "1v1")
addGame("2048", "2048")
addGame("Agar.io", "agario")
addGame("Breaklock", "breaklock")
addGame("Cookie Clicker", "click")
addGame("EaglerCraft (MC 1.5.2)", "ec")
addGame("EaglerCraftX (MC 1.8.9)", "ecx")
addGame("JustFall.LOL", "jfall")
addGame("Madalin Stunt Cars 3", "msc3")
addGame("Radius Raid", "raid")
addGame("Retro Bowl","rbowl")
addGame("Run 3", "run3")
addGame("Slope", "slope")
addGame("Super Mario 64", "sm64")
addGame("Tunnel Rush", "trush")