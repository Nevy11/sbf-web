export interface Env {
	ASSETS: Fetcher;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		
		// Serve assets from the /dist directory
		const response = await env.ASSETS.fetch(request);
		
		// If the asset is not found (404), serve index.html for SPA routing
		if (response.status === 404) {
			return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
		}
		
		return response;
	},
};
