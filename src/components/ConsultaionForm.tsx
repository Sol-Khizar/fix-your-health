import { useForm, type SubmitHandler } from "react-hook-form";

interface consulationFromProps {
  name: string;
  phone: string;
  city: string;
}

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<consulationFromProps>();

  const onSubmit: SubmitHandler<consulationFromProps> = (data) => {
    const phoneNumber = "918433575788";
    const message = `*New Consultation Request*%0A
       Name: ${data.name}%0A
       Phone: ${data.phone}%0A
       City: ${data.city}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");

    reset();
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6"
      style={{
        backgroundImage: "url('assets/banner-bg1.png')",
      }}
    >
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-lg mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Get Started Today and Feel the Difference!
        </h2>
        <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone must be 10 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Consult Now
          </button>
        </form>
      </div>
    </section>
  );
}
