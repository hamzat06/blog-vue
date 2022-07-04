import moment from "moment";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/arrow.svg";
import "./blog-card.component.style.scss";

const BlogCard = ({ image, title, description, slug, date }) => {
  function dateMe(date) {
    return moment(date).startOf("hour").fromNow();
  }
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
    <div className="post__card">
      {image && (
        <div className="post__top">
          <img alt="" src={image} />
        </div>
      )}
      <div className="post__bottom">
        <div>
          <h6>
            <span className="font-bold">Front-end</span> . 1 Hour Ago
          </h6>
          <h3>{title.length > 50 ? title.substring(0, 50) + "..." : title}</h3>
          <p>{description.substring(3, 140)}...</p>
        </div>
        <div className="post-footer">
          <span>{calculateTime(date)} Min Read</span>
          <Link to={`${slug}`} className="link">
            Read Full <img alt="" src={Arrow} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
