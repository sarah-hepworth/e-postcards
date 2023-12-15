import { FC, ReactElement } from "react";

export const Hero: FC = (): ReactElement => {
  return (
    <div className="container lg:mt-4 lg:mx-auto text-gray-800">
      <div className="m-4 shadow-2xl rounded-xl grid lg:grid-cols-2">
        <div className="h-56 bg-[url('/hero-postcard-stock-image.jpg')] bg-top bg-cover rounded-t-xl lg:h-full lg:rounded-tl-xl lg:rounded-tr-none lg:rounded-bl-xl lg:rounded-br-none"></div>
        <div className="flex flex-col justify-center items-center p-6 bg-indigo-200 rounded-b-xl lg:rounded-tl-none lg:rounded-tr-xl lg:rounded-bl-none lg:rounded-br-xl">
          <h1 className="text-4xl font-extrabold text-center mb-4 tracking-wide">Postcards delivered</h1>

          <p className="leading-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec sodales leo. Vivamus pretium velit
            enim, eu aliquet nibh maximus et. Pellentesque in elit nisi. Morbi et sapien a mi finibus luctus.
          </p>

          <button className="bg-white py-2 py 1 text-gray-800 rounded-sm w-48 mt-4">Send Now</button>
        </div>
      </div>
    </div>
  );
};
