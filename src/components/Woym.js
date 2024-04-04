import { CDN_URL } from "../utilities/constants";
import { dishList } from "../utilities/mockData";

const Dishes = ({ dishObj }) => {
  const { imageId } = dishObj;
  return (
    <div className="dishes">
      <img src={CDN_URL + imageId} />
    </div>
  );
};
const Header1 = () => {
  return (
    <div id="header1">
      {/* <Dishes dishObj={dishList[0]} />
      <Dishes dishObj={dishList[1]} /> */}
      {dishList.map((dish) => (
        <Dishes key={dish.id} dishObj={dish} />
      ))}
    </div>
  );
};

const Woym = () => {
  return (
    <div id="woym">
      <h1>What's on your mind</h1>
      <Header1 />
      <div className="underline"></div>
    </div>
  );
};

export default Woym;
