/**
 * @name CommentReply
 * @desc Essentially a comment form that automatically hides
 *       after submission
 * @extends CommentForm
 */

define(['./comment_form'], function(CommentForm) {

	return CommentForm.extend({

		onSuccess: function(model) {
			this.$el.hide();
			this.goToComment(model.id);
		}

	});

});
