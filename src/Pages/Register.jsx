import { useForm } from "react-hook-form";
import axios from "axios";
const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data.password !== data.confirm) {
      console.log("error");
      return;
    }
    initialValues.name = data.name;
    initialValues.email = data.email;
    initialValues.password = data.password;
    console.log(initialValues);
    try {
      let { data } = await axios.post("/api/users", initialValues);
      console.log(data);
      localStorage.setItem("token", data.token);
      if(data){

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto md:p-10 px-5">
      <h1 className="text-3xl pt-[130px] md:text-6xl md:ml-[50px] text-[#17A2B8]">
        Sign Up
      </h1>
      <p className="flex md:ml-[50px] items-center mt-5 text-[#333333]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-person-fill inline"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <span className="text-xl md:text-3xl"> Create Your Account</span>
      </p>
      <form className="md:ml-[50px]" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="border px-2 py-1 w-full text-xl md:text-2xl my-3"
        />
        <input
          type="email"
          placeholder="Email Address"
          {...register("email")}
          className="border px-2 py-1 w-full text-xl md:text-2xl mt-3"
        />
        <small
          className="text[rgba(0,0,0,0.4)]"
          style={{ color: "rgba(0, 0, 0, 0.5)" }}
        >
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email
        </small>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="border px-2 py-1 w-full text-xl md:text-2xl my-3 mt-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirm")}
          className="border px-2 py-1 w-full text-xl md:text-2xl my-3"
        />
        <button
          type="submit"
          className="bg-[#17A2B8] text-white text-xl p-2 px-3"
        >
          Register
        </button>
        <div className="flex mt-4 md:text-xl font-light">
          <p>Already have an account?</p>
          <a href="./login.html" className="ml-3 text-[#17A2B8]">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
