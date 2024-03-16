import Hero from "@/components/home/Hero";
import HomeProperties from "@/components/home/HomeProperties";
import InfoBoxes from "@/components/home/InfoBoxes";

import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
};

export default page;
