const { AuthenticationError } = require("apollo-server-express");
const { User, Picture, Favorite, Comments } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("pictures");
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("pictures");
    },
    pictures: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Picture.find(params).sort({ createdAt: -1 }).populate("Comments");
    },
    picture: async (parent, { pictureId }) => {
      return Picture.findOne({ _id: pictureId }).populate("Comments");
    },
  },
  //  User AUTH mutation

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addPicture: async (parent, { pictureData }, context) => {
      if (context.user) {
        const picture = await Picture.create({ ...pictureData, postedBy: context.user.id });

        const updatedUser = User.findOneAndUpdate(
          { _id: context.user.id },
          {
            $push: { pictures: pictureData },
          },
          {
            new: true,
          }
        );
        return { updatedUser, picture };
      }
      throw new AuthenticationError('Need to be logged in to post pictures');
    },

    addComment: async (parent, { PictureId, commentText, commentAuthor }) => {
      const comment = await Comment.create({ commentText, commentAuthor });

      return Picture.findOneAndUpdate(
        { _id: PictureId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    addFavorite: async (parent, { userId, PictureId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { favorites: { _id: PictureId } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeFavorite: async (parent, { favId }) => {
      return Favorite.findOneAndUpdate(
        { _id: favId },
        { $pull: { favorites: { _id: favoriteId } } },
        { new: true }
      );
    },

    removeComment: async (parent, { PictureId, commentId }) => {
      return Picture.findOneAndUpdate(
        { _id: PictureId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
    removePicture: async (parent, { PictureId }) => {
      return Picture.deleteOne(
        { _id: PictureId },
        { $pull: { Pictures: { _id: PictureId } } },
        { new: true }
      );
    },
  },
};
module.exports = resolvers;
