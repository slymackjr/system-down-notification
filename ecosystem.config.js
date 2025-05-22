module.exports = {
  apps: [{
    name: "system-down-page",
    script: "server.js",
    instances: 1, // or "max" if stateless
    exec_mode: "fork", // or "cluster"
    watch: false,
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};

