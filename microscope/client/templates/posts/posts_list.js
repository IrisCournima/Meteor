var postData = [//tableau de données
//données prototypes -->
	{
		title:'Introducing Telescope',
		url:'http://sachagreif.com/introducing-telescope/'
	},
	{
		title:'Meteor',
		url:'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url:'http://themeteorbook.com'
	}
];
Template.postsList.helpers({ //definition des template helpers
	posts: postData
});