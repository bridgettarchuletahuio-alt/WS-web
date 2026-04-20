import http from 'node:http'

const port = Number(process.env.PORT || 3000)
const host = process.env.HOST || '0.0.0.0'

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>WS WEB</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #0f172a; color: #e2e8f0; }
    main { max-width: 760px; margin: 80px auto; padding: 24px; }
    .card { background: #111827; border: 1px solid #334155; border-radius: 16px; padding: 24px; }
    h1 { margin-top: 0; }
    .ok { color: #22c55e; font-weight: 700; }
  </style>
</head>
<body>
  <main>
    <div class="card">
      <h1>WS WEB</h1>
      <p class="ok">Service is running</p>
      <p>This repository is now ready to be exposed behind a domain.</p>
      <p>Recommended public port: HTTPS 443</p>
      <p>Internal service port: ${port}</p>
    </div>
  </main>
</body>
</html>`

const server = http.createServer((req, res) => {
  if(req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    res.end(JSON.stringify({ status: 'ok', service: 'WS WEB', port }))
    return
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
  res.end(html)
})

server.listen(port, host, () => {
  console.log(`WS WEB server listening on http://${host}:${port}`)
})
