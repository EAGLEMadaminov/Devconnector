const Dashboard = () => {
  return (
    <div className="md:w-[1100px] px-5 md:px-0 md:mx-auto pt-[120px]">
      <h1 className="text-3xl md:text-6xl text-[#17A2B8] font-semibold">
        Dashboard
      </h1>
      <div className="flex items-center mt-5 text-[#333333]">
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
        <p className="text-xl md:text-3xl font-light">
          Welcome <span className="user-name"></span>
        </p>
      </div>
      <div className="hide-info">
        <p className="text-xl mt-5 font-light">
          You have not yet setup a profile, please add some info
        </p>

        <button
          type="button"
          className="bg-[#007ACC] hover:bg-[#17A2B8] mt-5 font-light text-white text-xl p-2 px-3"
        >
          <a href="./form/profile.html">Create Profile</a>
        </button>
      </div>
      <div className="hidden show-user-info my-10">
        <div className="flex flex-wrap">
          <a
            href="./form/editProfile.html"
            className="md:text-xl flex w-[250px] md:w-auto items-center mx-2 p-2 px-3 bg-[#F4F4F4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle text-[#17A2B8] mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
            Edit Profile
          </a>
          <a
            href="./form/experience.html"
            className="md:text-xl w-[250px] md:w-auto my-1 md:my-0 flex items-center mx-2 p-2 px-3 bg-[#F4F4F4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              fill="currentColor"
              viewBox="0 0 448 512"
              className="text-[#17A2B8] mr-2"
            >
              <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z" />
            </svg>
            Add Experience
          </a>
          <a
            href="./form/education.html"
            className="md:text-xl w-[250px] md:w-auto flex items-center mx-2 p-2 px-3 bg-[#F4F4F4]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-mortarboard-fill text-[#17A2B8] mr-2"
              viewBox="0 0 16 16"
            >
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
            </svg>
            Add Education
          </a>
        </div>

        <div className="experience-box mt-10">
          <h2 className="text-2xl md:text-3xl">Experience Credentials</h2>
          <div className="flex mt-6">
            <table className="text-center">
              <thead className="md:text-xl md:font-bold">
                <tr>
                  <th className="p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal">
                    Company
                  </th>
                  <th className="hidden md:table-cell p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal">
                    Title
                  </th>
                  <th className="hidden md:table-cell p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal">
                    Years
                  </th>
                  <th className="p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal"></th>
                </tr>
              </thead>
              <tbody className="experience-body text-[14px] md:text-xl"></tbody>
            </table>
          </div>
        </div>
        <div className="education-box mt-10">
          <h2 className="text-2xl md:text-3xl">Education Credentials</h2>
          <div className="flex mt-6">
            <table className="text-center">
              <thead className="md:text-xl md:font-bold">
                <tr>
                  <th className="p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal">
                    School
                  </th>
                  <th className="hidden md:table-cell p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal">
                    Degree
                  </th>
                  <th className="hidden md:table-cell p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal">
                    Years
                  </th>
                  <th className="p-4 px-5 bg-[#F4F4F4] mx-1 border-white border-[10px] font-normal"></th>
                </tr>
              </thead>
              <tbody className="education-body"></tbody>
            </table>
          </div>
        </div>

        <button className="delete-user-btn bg-rose-600 mt-10 flex items-center text-white text-xl font-light p-2 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-person-fill-dash mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4" />
          </svg>
          Delete My Acoount
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
