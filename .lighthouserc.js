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
        preset: ["desktop", "mobile"],
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.1 }],

        "categories:performance": ["warn", { minScore: 0.1 }],
        "categories:accessibility": ["warn", { minScore: 0.1 }],
        "categories:best-practices": ["warn", { minScore: 0.1 }],
        "categories:seo": ["warn", { minScore: 0.1 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
