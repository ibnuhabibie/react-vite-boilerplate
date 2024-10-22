import { lazy } from "react";
import { isProduction } from "../../utils/environment";

export const TanStackRouterDevelopmentTools = isProduction
	? (): null => null
	: lazy(() =>
			import("@tanstack/router-devtools").then((result) => ({
				default: result.TanStackRouterDevtools,
			}))
		);
