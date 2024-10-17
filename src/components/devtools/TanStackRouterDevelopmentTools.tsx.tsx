import { lazy } from "react";
import { isProduction } from "../../common/utils";

export const TanStackRouterDevelopmentTools = isProduction
    ? (): null => null
    : lazy(() =>
        import("@tanstack/router-devtools").then((result) => ({
            default: result.TanStackRouterDevtools,
        }))
    );