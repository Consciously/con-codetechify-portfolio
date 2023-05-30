import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { openaiImageAsset } from 'sanity-plugin-asset-source-openai';
import schemas from '@/sanity/schemas';
// import sanityStudioOpenAIPlugin from './public/env.json';
import { openAIApiKey } from '@/environment';

const config = defineConfig({
	projectId: 'amk583p5',
	dataset: 'production',
	title: 'con-codetechify-portfolio',
	apiVersion: '2023-05-30',
	basePath: '/admin',
	plugins: [
		deskTool(),
		openaiImageAsset({
			API_KEY: openAIApiKey,
		}),
	],
	schema: { types: schemas },
});

export default config;
