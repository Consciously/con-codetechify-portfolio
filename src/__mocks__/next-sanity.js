const mockSanityClient = {
	fetch: jest.fn(),
};

export const createClient = jest
	.fn()
	.mockImplementation(() => mockSanityClient);
