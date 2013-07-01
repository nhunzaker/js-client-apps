<ul class="articles-list">
	<% _.each(articles, function(article) { %>
		<li class="articles-list-item">
			<h4><a href="<%= article.url %>"><%= article.title %></a></h4>
			<small>Points: <%= article.points %></small>
		</li>
	<% }) %>
</ul>