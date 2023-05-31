import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { openaiImageAsset } from 'sanity-plugin-asset-source-openai';
import schemas from '@/sanity/schemas';

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_DATASET!,
	title: process.env.NEXT_PUBLIC_TITLE!,
	apiVersion: '2023-05-30',
	basePath: '/admin',
	useCdn: true,
	plugins: [
		deskTool(),
		openaiImageAsset({
			API_KEY: process.env.NEXT_PUBLIC_OPENAI!,
		}),
	],
	schema: { types: schemas },
});

export default config;
