function addGame(name, innerName){
  let link = document.createElement("a")
  link.innerText = name
  link.target = "_blank"
  link.href = `./runner.html?url=./games/${innerName}&name=${name}`
  document.body.appendChild(link)
}
addGame("1v1.lol","1v1")