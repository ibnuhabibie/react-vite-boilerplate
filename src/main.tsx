import { Suspense, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRouter } from "@tanstack/react-router";

import App from "./App.tsx";
import "./resources/styles/index.css";

import "./utils/i18n.ts";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.querySelector("#root") as Element;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Suspense fallback="loading">
				<App router={router} />
			</Suspense>
		</StrictMode>
	);
}
