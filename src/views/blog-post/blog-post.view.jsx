import axios from "axios";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader.component";
import "./blog-post.style.scss";

const BlogPost = () => {
  const params = useParams();
  const [fetching, setFetching] = useState(true);
  const [post, setPost] = useState({});

  const fetchPost = useCallback(() => {
    axios
      .get(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${params.slug}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setFetching(false));
  }, [params.slug])
  
  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  function calculateTime(createdAt) {
    const today = moment(Date.now());
    const postDate = moment(createdAt);
    const diffInHours = today.diff(postDate, "hours");

    if (diffInHours < 24) {
      return moment(createdAt).format("h");
    } else if (diffInHours > 24 && diffInHours < 36) {
      return moment(createdAt).format("h");
    } else if (diffInHours > 36) {
      return moment(createdAt).format("MMMM Do YYYY, h:mm:ss a");
    }
  }

  return (
    <>
      {fetching ? (
        <Loader />
      ) : (
        <div>
          <main class="individual">
            <small class="individual__date">
              By Ryan Jackson · {calculateTime(post?.date)} month ago
            </small>
            <section dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}></section>
          </main>

          {/* <div class="more__article">
            <h2 class="more__article--title">More Articles</h2>
            <div class="posts-grid">
              {otherPosts.splice(0, 3).map((post) => {
                return (
                  <BlogCard
                    image={post?.jetpack_featured_media_url}
                    title={post?.title?.rendered}
                    description={post?.excerpt?.rendered}
                    date={post?.date}
                    key={post?.id}
                    slug={post?.slug}
                  />
                );
              })}
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default BlogPost;
