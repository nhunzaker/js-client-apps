<div class="modal-wrapper">
	<form class="form-login">
		<h3>Login</h3>
		<ul class="js-errors errors-list">
			<% _.each(errors, function(e) { %>
				<li class="error"><%= e %></li>
			<% }); %>
		</ul>
		<div>
			<label for="email">Email</label>
			<input type="email" name="email" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" />
		</div>
		<div>
			<input type="submit" value="Login"/>
		</div>
	</form>
</div>