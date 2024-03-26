module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3000"],
      collect: {
        numberOfRuns: 5,
      },
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      startServerCommand: "npm run start",
      target: "temporary-public-storage",
    },
  },
};
