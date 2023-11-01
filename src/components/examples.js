import { ExamplesList } from "./ExamplesList";
// import Video from "../example images/video.mov";

const Examples = () => {
  return (
    <div className="examples" id="examples">
      {/* <div className="examples_beforeafter">
        <p>PRZED</p>
        <p>PO</p>
      </div>
      <div className="examples_images">
        {ExamplesList.map((slide, index) => {
          return (
            <img
              src={slide.image}
              alt="example"
              className="image"
              key={index}
            />
          );
        })}
      </div>
      <div className="examples_video">
        <video controls src={Video} type="video/mov" />
      </div> */}
    </div>
  );
}

export default Examples;
