"use client";

import Image from "next/image";
import styles from "./page.module.css";
import * as cv from "@techstark/opencv-js";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <div className="inputoutput">
            {selectedImage && (
              <div>
                <Image
                  alt="not found"
                  width={"250"}
                  height={"250"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
              </div>
            )}
            <div className="caption">
              Image Source{" "}
              <input
                type="file"
                name="myImage"
                onChange={(e) => {
                  setSelectedImage(e.target.files ? e.target.files[0] : null);
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
