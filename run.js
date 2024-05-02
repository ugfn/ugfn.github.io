function openGame() {
  const params = new URLSearchParams(document.location.search);
  const namein = document.getElementById("gameName")
  var win = window.open()
  var link = win.document.createElement("link")
  var url = params.get("url")
  var iframe = win.document.createElement('iframe')
  link.rel = "stylesheet"
  link.href = "frame.css"
  win.document.body.style.margin = 0
  iframe.src = url;
  iframe.allowFullscreen = true
  iframe.frameBorder = "0"
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  if(namein.value == ""){
    win.document.title = params.get("name")
  } else {
    win.document.title = namein.value
  }
  win.document.body.appendChild(iframe);
} 
