import React from "react";

const Posts = () => {
  return (
    <div>
      <div className="all-posts container px-5 mx-auto pt-[120px]">
        <h1 className="text-3xl md:text-6xl text-[#17A2B8] font-semibold">
          Posts
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
          <p className="text-2xl md:text-3xl font-light">
            Welcome to the community
          </p>
        </div>
        <p className="bg-[#17A2B8] text-xl md:text-2xl mt-7 mb-5 p-3 text-white font-semibold">
          Say Something...
        </p>

        <form>
          <textarea
            className="w-full text-xl md:text-2xl border-[3px] p-3"
            cols="20"
            rows="4"
            required
            placeholder="Create a post"
          ></textarea>
          <button
            type="submit"
            className="px-5 my-4 p-2 text-white text-xl bg-[#343A40]"
          >
            Submit
          </button>
        </form>

        <div className="hidden users-posts"></div>
      </div>
      <div className="hidden show-unique-post px-5 md:px-0 container mx-auto pt-[120px]">
        <button className="back-to-post-btn p-2 px-3 bg-gray-200 text-xl font-light text-gray-800">
          Back To Posts
        </button>
        <div className="user-post-div border flex-col md:flex-row flex p-5 my-5">
          <div className="image-div md:ml-20 text-center flex flex-col items-center">
            <img
              src=""
              alt=""
              className="user-image rounded-[50%] w-[100px] h-[100px]"
            />
            <h2 className="user-name text-xl text-[#17ABCD] font-semibold">
              name
            </h2>
          </div>
          <div className="info-div ml-10 flex flex-col justify-around">
            <h2 className="user-text text-2xl font-light">text</h2>
            <p className="user-post-time font-light my-3 text-gray-400">time</p>
            <div className="post-bnts-div flex gap-4">
              <button className="like-btn flex items-center p-2 px-3 bg-[#F4F4F4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                  height="25"
                  width="25"
                  viewBox="0 0 512 512"
                >
                  <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                </svg>
                <span className="like-count"></span>
              </button>
              <button className="dislike-btn p-2 px-3 bg-[#F4F4F4]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400"
                  height="25"
                  width="25"
                  viewBox="0 0 512 512"
                >
                  <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
                </svg>
                <span className="disliek-count"></span>
              </button>
              <a
                href=""
                className="discus-bnt p-2 px-5 text-xl bg-[#17A2B8] text-white"
              >
                Discus
                <span className="discus-count"></span>
              </a>
              <button className="delete-btn hidden px-3 bg-rose-500 text-xl text-white font-bold">
                x
              </button>
            </div>
          </div>
        </div>

        <p className="text-2xl my-5 bg-[#17A2B8] text-white p-2 px-3 font-bold">
          Leave a Comment
        </p>
        <form className="unique-post-form">
          <textarea
            className="w-full text-2xl border-[3px] p-3"
            cols="20"
            rows="4"
            required
            placeholder="Create a post"
          ></textarea>
          <button
            type="submit"
            className="px-5 my-4 p-2 text-white text-xl bg-[#343A40]"
          >
            Submit
          </button>
        </form>

        <div className="post-commetns-div"></div>
      </div>
      <button
        disabled
        type="button"
        className="loading-effects hidden ml-[600px] py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center"
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
    </div>
  );
};

export default Posts;
