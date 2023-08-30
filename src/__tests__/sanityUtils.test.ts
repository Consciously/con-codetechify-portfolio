/**
 * @jest-environment node
 */

import { getProjects } from '@/sanity/sanityUtils';
import { createClient, groq } from 'next-sanity';

jest.mock('next-sanity', () => ({
	createClient: jest.fn().mockReturnValue({
		fetch: jest.fn(),
	}),
	groq: jest.fn(),
}));

describe('getProjects', () => {
	let mockClient;

	beforeEach(() => {
		mockClient = createClient({ projectId: 'test', dataset: 'test' });
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('returns the expected data', async () => {
		const mockData = [{ _id: '1', title: 'Test Project' }];

		// Mock the createClient function
		mockClient = createClient({ projectId: 'test', dataset: 'test' });
		(mockClient.fetch as jest.Mock).mockResolvedValue(mockData);

		const result = await getProjects();
		expect(result).toEqual(mockData);
	});
});
