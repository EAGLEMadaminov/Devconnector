const Profile = () => {
  return (
    <>
      <div className="all-info px-10 md:px-0 md:w-[1100px] mx-auto pt-[140px]">
        <h1 className="text-3xl md:text-6xl text-[#17A2B8] font-semibold">
          Developers
        </h1>
        <p className="md:text-3xl font-light my-5">
          ✡ Browse and connect with developers
        </p>
        <button
          disabled
          type="button"
          className="loading-effects hidden ml-[50px] md:ml-[400px] py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-6 h-6 me-3 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading...
        </button>
        <div className="show-info"></div>
      </div>

      <div className="hidden person-info px-10 md:px-0 container mx-auto">
        <a
          href="./profile.html"
          className="md:text-xl md:font-light p-2 px-3 bg-[#F4F4F4]"
        >
          Back To Profiles
        </a>
        <a
          href="./form/editProfile.html"
          className="hidden edit-profile-link bg-[#343A40] md:text-xl ml-2 text-white p-2 px-4"
        >
          Edit Profile
        </a>
        <div className="w-full bg-[#17A2B8] mt-5 text-white flex flex-col items-center py-10">
          <img
            className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-[50%]"
            src="https://gravatar.com/avatar/eeebd9666704be8010772feb8b7afdc8?d=mm&r=pg&s=200"
            alt=""
          />
          <h2 className="text-4xl md:text-6xl person-name">Name</h2>
          <p className="company text-2xl md:text-3xl font-light my-4">
            Company
          </p>
          <p className="location text-xl">Location</p>
          <ul className="social-list flex flex-wrap justify-between md:items-center mt-5 gap-3"></ul>
        </div>
        <div className="border-[4px] boder-[black] py-5 my-5 text-center">
          <h2 className="text-3xl text-[#17A2B8]">
            <span className=""></span> Bio
          </h2>
          <p className="user-bio text-xl my-3"></p>
          <div className="border-[2px] mx-10 my-6"></div>
          <h2 className="text-3xl text-[#17A2B8]">Skill Set</h2>
          <ul className="skill-list flex-col items-start ml-[50px] md:flex-row md:ml-0 flex w-full my-6 justify-center"></ul>
        </div>

        <div className="flex flex-wrap justify-between gap-4">
          <div className="experience w-full md:w-[48%] p-7 border-[4px]">
            <h2 className="text-3xl text-[#17A2B8] font-semibold">
              Experience
            </h2>
          </div>
          <div className="education w-full md:w-[48%] mt-5 md:mt-0 p-7 border-[4px]">
            <h1 className="text-3xl text-[#17A2B8] font-semibold">Education</h1>
          </div>
        </div>
        <h2 className="text-3xl my-5 text-[#17A2B8] font-semibold">
          Github Repos
        </h2>
        <div className="show-github-repos"></div>
      </div>
    </>
  );
};

export default Profile;
