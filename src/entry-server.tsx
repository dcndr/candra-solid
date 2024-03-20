// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap')
          </style>
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div class="font-display" id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
