import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed || []);
  const dispatch = useDispatch();
  const handleFeed = async () => {
    if (feed.length > 0) return;
    try {
      const res = await axios.get(
        BASE_URL + "feed",

        { withCredentials: true }
      );
      dispatch(addFeed(res.data.user));
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    if (feed.length === 0) {
      handleFeed();
    }
  }, []);
  return (
    <div>
      {feed.length > 0 ? (
        <UserCard user={feed[0]} />
      ) : (
        <p>Loading feed or no data available.</p>
      )}
    </div>
  );
};

export default Feed;
