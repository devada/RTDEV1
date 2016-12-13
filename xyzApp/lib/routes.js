FlowRouter.route('/', {
  action: function() {
      BlazeLayout.render("mainLayout", {content: "appPage"});
  },
  name: 'home'
});


FlowRouter.route('/dashboard',{
  subscriptions: function (params, queryParams) {
    this.register('posts', Meteor.subscribe('allPosts'));
  },
  action: function (params, queryParams) {
    BlazeLayout.render('loggedInLayout', {content: "postsList"});
  },
  name: 'dashboard'
});

FlowRouter.route('/post/:postId',{
  subscriptions: function (params, queryParams) {
    this.register('post', Meteor.subscribe('singlePost', params.postId));
  },
  action: function (params, queryParams) {
    BlazeLayout.render('postLayout', {content: "singlePost"});
  },
  name: 'post'
})
