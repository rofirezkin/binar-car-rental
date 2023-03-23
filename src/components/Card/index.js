import "./style.css";

//props
const Card = ({description, reviewer}) => {
    // const description = props.description
    // const reviewer = props.reviewer

  return (
    <div class="card text-left styCard">
      <img class="card-img-top" src="holder.js/100px180/" alt="" />
      <div class="card-body">
        <h4 class="card-title">{description}</h4>
        <p class="card-text">{reviewer}</p>
      </div>
    </div>
  );
};

export default Card;
