define("@staking/config", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.maxHeight = exports.maxWidth = exports.isMultiple = exports.isThemeApplied = exports.getTokenUrl = void 0;
    ///<amd-module name='@staking/config'/> 
    const baseUrl = 'https://openswap.xyz/#';
    exports.getTokenUrl = `${baseUrl}/swap`;
    exports.isThemeApplied = false;
    exports.isMultiple = false;
    exports.maxWidth = '690px';
    exports.maxHeight = '321px';
});
