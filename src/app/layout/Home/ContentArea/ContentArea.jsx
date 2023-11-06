import Image from "next/image";
import React from "react";
import headerImg1 from "../../../assets/headerImg1.png";
import headerImg2 from "../../../assets/headerImg2.png";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const ContentArea = () => {
  return (
    <div className="mx-4 text-[rgb(33,33,33)]">
      <div className="w-full flex items-center gap-x-7">
        <div className="w-1/2">
          <div>
            <h1 className="text-4xl font-black mb-4">
              Health benefits of an avocado
            </h1>
            <h4 className="text-lg font-bold mb-2">Supports eye health:</h4>
            <p className="text-base font-normal">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
            <h4 className="text-lg font-bold mt-4 mb-2">
              Supports eye health:
            </h4>
            <p className="text-base font-normal">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            className="rounded-3xl"
            src={headerImg1}
            width={1100}
            height={650}
            alt="image"
          ></Image>
        </div>
      </div>
      <div className="my-10">
        <h4 className="text-lg font-bold mb-2">Supports eye health:</h4>
        <p className="text-base font-normal">
          Spinach contains high levels of vitamin A and other antioxidants that
          help maintain healthy vision and protect against age-related macular
          degeneration. Spinach contains high levels of vitamin A and other
          antioxidants that help maintain healthy vision and protect against
          age-related macular degeneration. Spinach contains high levels of
          vitamin A and other antioxidants that help maintain healthy vision and
          protect against age-related macular degeneration. Spinach contains
          high levels of vitamin A and other antioxidants that help maintain
          healthy vision and protect against ge-related macular degeneration.
          Spinach contains high levels of vitamin A and other antioxidants that
          help maintain healthy vision and protect against age-related macular
          degeneration. Spinach contains high levels of vitamin A and other
          antioxidants that help maintain healthy vision and protect against
          age-related macular degeneration. Spinach contains high levels of
          vitamin A and other antioxidants that help maintain healthy vision and
          protect against age-related macular degeneration.
        </p>
      </div>
      <div className="w-full flex items-center gap-x-7">
        <div className="w-1/2">
          <Image
            className="rounded-3xl"
            src={headerImg2}
            width={1100}
            height={650}
            alt="image"
          ></Image>
        </div>
        <div className="w-1/2">
          <div>
            <h4 className="text-lg font-bold mb-2">Supports eye health:</h4>
            <p className="text-base font-normal">
              <p className="text-base font-normal">
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
                vision and protect against age-related macular degeneration.
                Spinach contains high levels of vitamin A and other antioxidants
                that help maintain healthy vision and protect against
                age-related macular degeneration. Spinach contains high levels
                of vitamin A and other antioxidants that help maintain healthy
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h4 className="text-lg font-black mb-2">Was this helpful? </h4>
        <Rating style={{ maxWidth: 140 }} value={4} readOnly />
      </div>
    </div>
  );
};

export default ContentArea;
