/// <reference path="../typings/requirejs/require.d.ts" />

require.config({
    baseUrl:'scripts/amd-demo'
})

require(
    (['bootstrapper']), (bootstrapper) => {
        bootstrapper.run();
    }
)