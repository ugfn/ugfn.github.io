function openGame() {
  const params = new URLSearchParams(document.location.search);
  var win = window.open()
  var link = win.document.createElement("link")
  var url = params.get("url")
  var iframe = win.document.createElement('iframe')
  link.rel = "stylesheet"
  link.href = "frame.css"
  iframe.src = url;
  iframe.allowFullscreen = true
  iframe.frameBorder = "0"
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  win.document.title = params.get("name");
  //win.document.appendChild(link)
  win.document.body.appendChild(iframe);
  window.close()
} 
