import "./style.css";

//props
const Card = ({ description, reviewer }) => {
  // const description = props.description
  // const reviewer = props.reviewer

  return (
    <div className="card text-left styCard">
      <img className="card-img-top" src="holder.js/100px180/" alt="" />
      <div className="card-body">
        <h4 className="card-title">{description}</h4>
        <p className="card-text">{reviewer}</p>
      </div>
    </div>
  );
};

export default Card;
