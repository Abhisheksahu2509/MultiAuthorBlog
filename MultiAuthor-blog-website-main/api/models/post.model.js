import mongoose from "mongoose";
import badwords from 'bad-words';

const filter = new badwords();

const postSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    content: {
      type: String,
      required: true,
      validate: {
        validator: function (content) {
          return !filter.isProfane(content);
        },
        message: 'Content contains profane or offensive language.',
      },
    },
    title: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (title) {
          return !filter.isProfane(title);
        },
        message: 'Title contains profane or offensive language.',
      },
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    category: { type: String, default: 'uncategorized' },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
export default Post;