import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from '@/sanity/schemas';

const config = defineConfig({
	projectId: 'amk583p5',
	dataset: 'production',
	title: 'con-codetechify-portfolio',
	apiVersion: '2023-05-14',
	basePath: '/admin',
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
