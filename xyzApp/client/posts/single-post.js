Template.singlePost.helpers({
  getPost: function () {
    return Posts.findOne();
  }
});
