const post = {
	name: 'post',
	title: 'Posts',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title' },
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }, { type: 'code' }],
		},
		{
			name: 'author',
			title: 'Author',
			type: 'string',
		},
		{
			name: 'avatar',
			title: 'Avatar',
			type: 'image',
			options: { hotspot: true },
			fields: [
				{
					name: 'alt',
					title: 'Alt',
					type: 'string',
				},
			],
		},
	],
};

export default post;
