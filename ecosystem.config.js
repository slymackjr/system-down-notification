module.exports = {
  apps: [{
    name: "system-down-page",
    script: "npm",
    args: "start",
    instances: "max",
    exec_mode: "cluster",
    watch: false,
    env: {
      NODE_ENV: "production",
      PORT: 3000
    }
  }]
};
