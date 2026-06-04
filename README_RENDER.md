# ZK Nextgen Power website – deployment on Render

## Local start
1. Install Node.js.
2. Open terminal in this folder.
3. Run:

```bash
npm install
npm start
```

Open: http://localhost:3000

## Render deployment
1. Upload this folder to GitHub.
2. In Render choose **New → Web Service**.
3. Connect the repository.
4. Settings:
   - Environment: **Node**
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Deploy.

The app uses `process.env.PORT`, so it works on Render without changing the port.

## Notes
- Contact form opens a prepared email draft to `kvapil.develop@gmail.com`.
- No messages are stored on the server.
- All images are inside `/assets`.
