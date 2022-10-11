function renderHtml(url) {
  switch (url) {
    case "/home":
      return "<html><h1>首页</h1></html>";
    case "/list":
      return "<html><h1>BGD</h1></html>";
    default:
      return "<html><h1>404 not found</h1></html>";
  }
}

module.exports = {
  renderHtml
}