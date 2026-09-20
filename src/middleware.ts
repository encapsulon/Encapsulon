import { NextRequest, NextResponse } from "next/server";

// Flip to false and redeploy to take the site out of maintenance mode.
const MAINTENANCE_MODE = false;

const maintenanceHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Encapsulon — Site Maintenance</title>
<meta name="robots" content="noindex" />
<style>
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(135deg, rgb(6, 22, 99), rgb(3, 115, 225));
    color: #ffffff;
    text-align: center;
    padding: 24px;
  }
  .card { max-width: 520px; }
  .logo { max-width: 180px; margin-bottom: 32px; }
  h1 { font-size: 1.8rem; margin-bottom: 12px; }
  p { font-size: 1.05rem; line-height: 1.6; color: rgba(255, 255, 255, 0.9); }
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top-color: #ffffff;
    border-radius: 50%;
    margin: 28px auto 0;
    animation: spin 1s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
</head>
<body>
  <div class="card">
    <img class="logo" src="/assest/logo12.png" alt="Encapsulon" />
    <h1>We'll be right back</h1>
    <p>Encapsulon is currently undergoing scheduled maintenance. We're working to improve your experience and will be back online shortly. Thank you for your patience.</p>
    <div class="spinner"></div>
  </div>
</body>
</html>`;

export function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE && request.nextUrl.pathname === "/") {
    return new NextResponse(maintenanceHtml, {
      status: 503,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "Retry-After": "3600",
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
