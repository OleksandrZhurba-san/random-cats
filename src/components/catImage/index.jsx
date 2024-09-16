import { useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";

export default function CatImage() {
  const url = "https://api.thecatapi.com/v1/images/search";
  const [imgUrl, setImageUrl] = useState("");
  async function getImage() {
    try {
      const response = await axios.get(url);
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className={styles.cat_image_container}>
      <h1>Random Cat Image</h1>
      {imgUrl && <img src={imgUrl} alt="cat image"></img>}
      <button onClick={() => getImage()}>Load New Image</button>
    </div>
  );
}
