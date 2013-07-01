<a class="global-header-link" href="/">&#8962; Haxxor News</a>

<% if (token) { %>
<a class="global-header-link" href="#account/edit">Welcome, <%= username %></a>
<a class="global-header-link" href="#account/logout">Logout</a>
<% } else { %>
<a class="global-header-link" href="#account/login">Login</a>
<% } %>