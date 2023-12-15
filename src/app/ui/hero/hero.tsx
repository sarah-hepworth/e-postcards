import { FC, ReactElement } from "react";

export const Hero: FC = (): ReactElement => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 lg:mt-4 text-gray-800">
      <div className="h-56 bg-[url('/hero-postcard-stock-image.jpg')] bg-top bg-cover lg:h-full"></div>
      <div className="flex flex-col justify-center items-center p-6 bg-indigo-200">
        <h1 className="text-4xl font-bold text-center mb-4">Postcards delivered</h1>

        <p className="leading-8 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec sodales leo. Vivamus pretium velit
          enim, eu aliquet nibh maximus et. Pellentesque in elit nisi. Morbi et sapien a mi finibus luctus. Donec
          maximus orci sit amet pretium maximus. Vestibulum pretium, metus eget rutrum consequat, tortor ex lacinia
          orci, sit amet convallis dui dui vel nulla. I
        </p>

        <button className="bg-white py-2 py 1 text-gray-800 rounded-sm w-48 mt-4">Send Now</button>
      </div>
    </div>
  );
};
