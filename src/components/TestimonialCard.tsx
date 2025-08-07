type TestimonialCardProps = {
  image: string;
  clientName: string;
  star: string;
  clientReview: string;
};

const TestimonialCard = ({
  image,
  clientName,
  clientReview,
  star,
}: TestimonialCardProps) => {
  return (
    <div className="bg-[#bce57b] rounded-3xl  w-full ">
      <div className="hidden md:block">
        <div className=" flex flex-col md:flex-row p-5 items-center md:items-end gap-8 ">
          <div className="flex flex-col md:w-1/4  w-3/4 ">
            <img src={`/testimonial/${image}`} alt={image} />
          </div>
          <p className="w-3/4 text-blue font-medium ">{clientReview}</p>
        </div>
        <div className="w-1/4  ">
          <div className="w-fit mx-auto pb-10">
            <h2 className="text-blue text-xl">{clientName}</h2>
            <h3 className="text-lg text-[#FF7900]">{star}</h3>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <div className=" flex flex-col md:flex-row p-5 items-center md:items-end gap-8 ">
          <div className="flex flex-col md:w-1/4  w-3/4 ">
            <img src={`/testimonial/${image}`} alt={image} />
          </div>
          <div>
            <h2 className="text-blue text-xl">{clientName}</h2>
            <h3 className="text-md text-[#FF7900]">{star}</h3>
          </div>
        </div>
        <div className="w-full px-10  ">
          <p className=" text-blue font-medium text-sm pb-10 ">
            {clientReview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

// <div className="bg-[#bce57b] rounded-3xl  w-full ">
//       <div className=" flex p-5 items-end gap-8">
//         <div className="flex flex-col w-1/4  ">
//           <img src={`/testimonial/${image}`} alt="client-1" />
//           {/* "testimonial/Client -1.webp" */}
//         </div>
//         <p className="w-3/4 text-blue font-medium ">{clientReview}</p>
//       </div>
//       <div className="w-1/4  ">
//         <div className="w-fit mx-auto">
//           <h2 className="text-blue text-xl">{clientName}</h2>
//           <h3 className="text-md text-[#FF7900]">{star}</h3>
//         </div>
//       </div>
//     </div>
