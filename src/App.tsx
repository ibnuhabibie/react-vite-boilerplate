import { RouterProvider, type createRouter } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { FunctionComponent } from "./types/common.ts";
type AppProps = { router: ReturnType<typeof createRouter> };

import { TanStackRouterDevelopmentTools } from "./components/devtools/TanStackRouterDevelopmentTools.tsx";

const queryClient = new QueryClient();

const App = ({ router }: AppProps): FunctionComponent => {
	return (
		<QueryClientProvider client={queryClient}>
			<TanStackRouterDevelopmentTools router={router} initialIsOpen={false} />
			<ReactQueryDevtools initialIsOpen={false} />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
