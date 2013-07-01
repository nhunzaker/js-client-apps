<form class="form-edit">
	<h3>Edit Your Account <small>(<%= email %>)</small></h3>
	<ul class="js-errors errors-list">
		<% _.each(errors, function(e) { %>
			<li class="error"><%= e %></li>
		<% }); %>
	</ul>
	<div>
		<label for="username">Username</label>
		<input type="text" name="username" value="<%= username %>"/>
	</div>
	<div>
		<label for="password">Password</label>
		<input type="password" name="password" />
	</div>
	<div>
		<label for="password_confirmation">Confirm Password</label>
		<input type="password" name="password_confirmation" />
	</div>
	<div>
		<input type="submit" value="Save"/>
	</div>
</form>