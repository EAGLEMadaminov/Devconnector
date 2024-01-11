const Login = () => {
  return (
    <div className="container mx-auto px-5 md:p-10">
      <h1 className="text-3xl pt-[150px] md:text-6xl md:ml-[50px] text-[#17A2B8]">
        Sign In
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
        <span className="text-xl md:text-3xl"> Sign Into Your Account</span>
      </p>
      <form className="md:ml-[50px]">
        <input
          type="email"
          placeholder="Email Address"
          className="border px-2 py-1 w-full text-xl md:text-2xl mt-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="border px-2 py-1 w-full text-xl md:text-2xl my-3 mt-4"
        />

        <button
          type="submit"
          className="bg-[#17A2B8] text-white text-xl p-2 px-3"
        >
          Login
        </button>
        <div className="flex mt-4 md:text-xl md:font-light">
          <p>Don't have an account?</p>
          <a href="./register.html" className="ml-3 text-[#17A2B8]">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
