import { useForm, type SubmitHandler } from "react-hook-form";
import FormInput from "../components/FormInput";
import Header from "../components/Header";

interface InputFormProp {
  name: string;
  phone: string;
  city: string;
}

const HeroSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFormProp>();

  const onSubmit: SubmitHandler<InputFormProp> = (data) => {
    const phoneNumber = "918693809067";

    const message = `*New Consultation Request*%0A
     Name: ${data.name}%0A
     Phone: ${data.phone}%0A
     City: ${data.city}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");

    reset();
  };

  return (
    <>
      <div className="bg-[url(/banner/home-banner.PNG)] ">
        <Header />
        <div className="grid  grid-cols-12 place-items-center w-full md:w-4/5  mx-auto  gap-5 md:gap-0 mt-[-8px] md:mt-[-80px]    ">
          <div className="col-span-12 md:col-span-3 px-4 md:px-0 relative z-0 md:left-11 left-0">
            <h2 className="text-3xl md:text-5xl font-black text-[#002040] leading-[1.4] ">
              Don't starve yourself to lose weight
            </h2>
            <p className="text-xl md:text-lg font-bold mt-3 text-[#002040] ">
              Eat right & lose weight with
            </p>
            <p className="text-xl md:text-lg font-bold mt-3 text-[#FF9A3F]">
              Dt. Richa Doshi
            </p>
          </div>
          <img
            src="/herosection-image/home-middle-img.webp "
            alt="middle image"
            className=" col-span-12 md:col-span-5 relative z-10 max-h-[90vh] object-contain  "
          />
          <div className="col-span-12 md:col-span-3 px-4 md:px-0   ">
            <p className=" text-[#002040] text-center font-bold text-3xl ">
              Get Started Today and Feel the Difference!
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                placeholder="Name*"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Name must be less than 50 characters",
                  },
                  pattern: {
                    value: /^[^\s].*$/,
                    message: "Name cannot start with a space",
                  },
                })}
                error={errors.name?.message}
              />

              <FormInput
                placeholder="Phone*"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must be 10 digits",
                  },
                })}
                error={errors.phone?.message}
              />

              <FormInput
                placeholder="City*"
                {...register("city", {
                  required: "City is required",
                  minLength: {
                    value: 2,
                    message: "City must be at least 2 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "City must be less than 50 characters",
                  },
                  pattern: {
                    value: /^[^\s].*$/,
                    message: "City cannot start with a space",
                  },
                })}
                error={errors.city?.message}
              />

              <button
                type="submit"
                className="text-white bg-[#FF9A3F] w-full mt-3 py-3 rounded-full border border-transparent transition-colors duration-500 ease-in-out hover:bg-white hover:border-[#FF9A3F] hover:text-[#FF9A3F]"
              >
                Consult Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <img
        src="banner/awardImage.webp"
        alt="awardImage"
        className=" w-4/5 md:w-3/5 mx-auto my-12 "
      />
    </>
  );
};

export default HeroSection;
