import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  const { about, photourl, firstName, lastName, gender, age } = user;
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img src={photourl} alt="Photo of User" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {firstName + " " + lastName || "Unknown User"}
          </h2>
          <p>{age + ", " + gender}</p>
          <p>{about}</p>
          <div className="card-actions justify-start my-4">
            <button className="btn btn-outline btn-error  ">Ignore </button>
            <button className="btn btn-outline btn-success ">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
