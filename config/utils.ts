import { NodeEnvironment } from "./setup";

export const getModes = (mode: NodeEnvironment) => ({
	isProd: mode === NodeEnvironment.production,
	isDev: mode === NodeEnvironment.development,
});
