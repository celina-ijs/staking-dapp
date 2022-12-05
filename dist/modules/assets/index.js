define("@staking/assets", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    exports.default = {
        icons: {
            logo: `${moduleDir}/img/openswap-logo-beta.svg`,
            logoMobile: `${moduleDir}/img/OpenSwap-Logo-Mobile.svg`
        },
        fullPath
    };
});
