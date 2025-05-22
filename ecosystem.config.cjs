module.exports = {
  apps: [
    {
      name: "system-down-notification",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        PORT: 3000, // Set your desired port here
        NODE_ENV: "production"
      },
      watch: false,
      instances: "1",
      exec_mode: "cluster"
    }
  ]
};