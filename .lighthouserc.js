module.exports = {
  ci: {
    collect: {
      //staticDistDir: "./build",
      startServerCommand: "yarn dev",
      url: ["http://localhost:3000"],
      collect: {
        numberOfRuns: 3,
      },
      settings: {
        preset: "desktop",
      },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
