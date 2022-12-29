function renderStatus(url) {
  const arr = ["/home", "/list",'/api/list'];
  return arr.includes(url) ? 200 : 404;
}

exports.renderStatus = renderStatus