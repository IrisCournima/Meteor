	
	Template.postItem.helpers({
		domain: function(){// le mot clé domaine prends une URL et retourne son domaine
			var a = document.createElement('a');
			a.href = this.url;
			return a.hostname;
		}
	});