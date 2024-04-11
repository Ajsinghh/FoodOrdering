import Header1 from "./Header1";
//what's on your mind(Woym)
const Woym = ({jsonData}) => {
  return (
    <div id="woym">
      <h1>What's on your mind</h1>
      <Header1 jsonData={jsonData}/>
      <div className="underline"></div>
    </div>
  );
};

export default Woym;