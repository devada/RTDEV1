Template.postsList.helpers({
  getPosts: function () {
    return Posts.find({}, { sort: { createdAt: -1}});
  }
});
