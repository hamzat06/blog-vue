import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/arrow.svg";
import Loader from "../../components/loader/loader.component";
import PaymentFlutterwave from "../../components/payment-flutterwave/payment-flutterwave.component";
import {
  fetchPosts,
  getPosts,
  hasError,
  isFetching
} from "../../store/post-slice";
import "./blog-home.view.style.scss";

const BlogHome = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const fetching = useSelector(isFetching);
  const error = useSelector(hasError);
  // const [posts, setPosts] = useState([]);
  // const [fetching, setFetching] = useState(true)
  useEffect(() => {
    if(posts.length < 1) {
      dispatch(fetchPosts());
    }
  }, [posts, dispatch]);

  const mainPost = posts[0];
  const otherPosts = posts.filter((post, index) => index !== 0);

  // function fetchPosts() {
  //   // let siteURL = "https://techcrunch.com";
  //   // let url = `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=7`;
  //   axios
  //     .get("https://techcrunch.com/wp-json/wp/v2/posts?page=1&per_page=7")
  //     .then((response) => {
  //       console.log(response.data);
  //       setPosts(response.data);
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     }).finally(() => setFetching(false));
  // }

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
          <div className="hero">
            <div className="hero__left">
              <img src={mainPost?.jetpack_featured_media_url} alt="" />
            </div>
            <div className="hero__right">
              <div className="hero__content">
                <h6>
                  <span className="font-bold">Front-end</span> . 1 Hour Ago
                </h6>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: mainPost?.title?.rendered,
                  }}
                ></h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: mainPost?.excerpt?.rendered,
                  }}
                ></p>
              </div>
              <div className="post-footer">
                <span>{calculateTime(mainPost?.date)} Min Read</span>
                <Link to={mainPost?.slug} className="link">
                  Read Full <img alt="" src={Arrow} />
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="posts-grid">
            {otherPosts?.map((post) => {
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
          </div> */}
          <PaymentFlutterwave />
        </div>
      )}
    </>
  );
};

export default BlogHome;
