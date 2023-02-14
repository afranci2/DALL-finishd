import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./App2.css";
import logo from "./assets/PixelBloom-1 (3).png";

function App2() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    setResult(res.data.data[0].url);
  };

  return (
    <div className="app-main">
      <>
        <div className="logoattop">
          <img src={logo}></img>
        </div>
        <h2>Generate a UI design using Open AI API</h2>

        <textarea
          className="app-input"
          placeholder="Search 'Modern and Simple Website UI design in the style of Apple...'"
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateImage}>Generate an Image</button>
      </>
      {result.length > 0 ? (
        <img className="result-image" src={result} alt="result" />
      ) : (
        <></>
      )}
      <div className="example-text">
        <p1>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. A fuga
          asperiores facilis tempore odio quod saepe quidem nisi culpa mollitia
          quibusdam earum, ipsum labore sapiente veritatis totam nihil illum.
          Aspernatur!
        </p1>
      </div>
    </div>
  );
}

export default App2;
