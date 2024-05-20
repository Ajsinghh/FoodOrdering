import Header1 from "./Header1";
//what's on your mind(Woym)
const Woym = ({jsonData}) => {
  return (
    <div className="my-16">
      <h1>What's on your mind</h1>
      <Header1 jsonData={jsonData}/>
    </div>
  );
};

export default Woym;