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
addGame("JustFall.LOL", "jfall")
addGame("Madalin Stunt Cars 3", "msc3")
addGame("Radius Raid", "raid")
addGame("Retro Bowl","rbowl")
addGame("Run 3", "run3")
addGame("Slope", "slope")
addGame("Tunnel Rush", "trush")