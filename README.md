# example-nodejs-ts-mongodb

1. Change your config
 + connectStr : yourConnectionString/mongodb+srv://<username>:<password>@cluster0-nou5c.gcp.mongodb.net/test?retryWrites=true&w=majority
 + port : 3000 or anything

2. npm i (get all node_modules)

3. Run : 
 + Local nodemon : npm run dev
 + Debug : Launch Debug with config
    {
      "version": "0.2.0",
      "configurations": [
        {
          "type": "node",
          "request": "launch",
          "name": "Launch Program Debug Default",
          "program": "${workspaceFolder}/dist/app.js",
          "preLaunchTask": "tsc: build - tsconfig.json",
          "outFiles": ["${workspaceFolder}/out/**/*.js"]
        }
      ]
    }
  + npm start : default

4. Test : 
 + http://localhost:3000/v1/information/insert (to insert one user)
 + http://localhost:3000/v1/information/list (to get list users)