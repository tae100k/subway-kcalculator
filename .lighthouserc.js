module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000"],
      numberOfRuns: 3,
      settings: {
        preset: "desktop",
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],

        "categories:performance": ["warning", { minScore: 0.8 }],
        "categories:accessibility": ["warning", { minScore: 0.9 }],
        "categories:best-practices": ["warning", { minScore: 0.9 }],
        "categories:seo": ["warning", { minScore: 0.9 }],
      },
    },
  },
};
