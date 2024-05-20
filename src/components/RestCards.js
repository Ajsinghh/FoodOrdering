import { CDN_URL } from "../utilities/constants";

const RestCards = ({ resObj }) => {
  const { info } = resObj;
  return (
    <div
      className="restcards py-2 flex flex-col items-center w-64 h-96 mb-10"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-img w-44  rounded-lg mb-3"
        alt="res-img"
        src={CDN_URL + info.cloudinaryImageId}
      />
      <h3 className="text-start">{info.name}</h3>
      <div className="rating-time text-center">
        <h3>{info.avgRating}</h3>
        <h3>{info.sla.slaString}</h3>
      </div>
      <h4 className="text-center">{info.cuisines.join(", ")}</h4>
    </div>
  );
};

export const promotedRestCards = (RestCards)=>{
     return (props)=>{
      return(
        <div>
          <label>Promoted</label>
          <RestCards {...props}/>
        </div>
      )
     }
}

export default RestCards