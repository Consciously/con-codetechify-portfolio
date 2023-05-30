import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';
import { openAIApiKey } from '@/environment';

export async function GET() {
	const configuration = new Configuration({
		organization: 'org-IIdcRKDTvgM2EvRtsoYugwa6',
		apiKey: openAIApiKey,
	});

	const openai = new OpenAIApi(configuration);
	const response = await openai.createChatCompletion({
		model: 'gpt-3.5-turbo',
		messages: [
			{ role: 'user', content: `What is react.js?` },
			{ role: 'user', content: 'What are components?' },
		],
	});

	return NextResponse.json({ data: response.data });
}
