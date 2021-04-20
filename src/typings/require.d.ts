declare namespace RTypes {

    import type * as _fs from "node:fs";

    /**@description fs*/
    export type fs = typeof _fs;

    /**@description path*/
    export type { PlatformPath as path } from "node:path";

    /**@description stream*/
    export type * as stream from "node:stream";
}