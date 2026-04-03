import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Breadcrumb from "../components/Breadcrumb";
import { assets, slider } from "../constant/constant";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const Event = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <Breadcrumb
        bg_img={assets.bg_bread1}
        desc="Empowering India with Quality Computer Education Since 2007"
        heading="Our Event"
      />

      {/* Gallery */}
      <div className="grid my-8 mx-2 md:mx-14 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
        {slider.map((img, i) => (
          <img
            key={i}
            src={img.src}
            className="w-full cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slider}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default Event;
