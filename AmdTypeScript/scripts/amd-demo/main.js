/// <reference path="../typings/requirejs/require.d.ts" />
require.config({
    baseUrl: 'scripts/amd-demo'
});
require((['bootstrapper']), function (bootstrapper) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map