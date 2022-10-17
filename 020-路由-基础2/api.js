function render(res, data, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type ? type : "text/html"};charset=utf-8`,
  });
  res.write(data);
}

const apiRouter = {
  "/api/login": (res) => {
    render(res, `{ok:1}`);
  },
};

module.exports = apiRouter;
