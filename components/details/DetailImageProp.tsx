import { PropertiesType } from "@/types/types";
import Image from "next/image";
import React from "react";
interface IImgDetail {
  property: PropertiesType;
}

const DetailImageProp = ({ property }: IImgDetail) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={property.images[0]}
            alt=""
            className="object-cover h-[400px] w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailImageProp;
