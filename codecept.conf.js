const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins(); // enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins

exports.config = {
    output: "./output/",
    helpers: {
        Playwright: {
            url: process.env.BASE_URL || "http://localhost:1234/66",
            show: true,
            restart: "session",
            browser: "chromium",
            windowSize: "1640x900",
            waitForTimeout: 1000,
            chromium: {
                args: ["--no-sandbox", "--disable-gpu", "--disable-setuid-sandbox", "--window-size=1640,900"],
                slowMo: 25,
            },
            timeout: 1000,
        },
    },
    include: {},
    mocha: {
        reporterOptions: {
            "codeceptjs-cli-reporter": {
                stdout: "-",
                options: {
                    verbose: true,
                    debug: true,
                    steps: true,
                },
            },
            "mocha-junit-reporter": {
                stdout: "./output/console.log",
                options: {
                    mochaFile: "./output/result.xml",
                    attachments: true,
                    verbose: true,
                    steps: true,
                },
            },
        },
    },
    bootstrap: null,
    timeout: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: "./features/*.feature",

        steps: [
            "./step_definitions/demo.js",
        ],
    },
    plugins: {
        screenshotOnFail: {
            enabled: true,
        },
        tryTo: {
            enabled: true,
        },
        retryFailedStep: {
            enabled: false,
        },
        retryTo: {
            enabled: true,
        },
        eachElement: {
            enabled: true,
        },
        pauseOnFail: {},
    },
    stepTimeout: 0,
    stepTimeoutOverride: [
        {
            pattern: "wait.*",
            timeout: 0,
        },
        {
            pattern: "amOnPage",
            timeout: 1000,
        },
    ],
    tests: "./*_test.js",
};
