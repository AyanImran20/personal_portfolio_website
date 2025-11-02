import React from "react";
import paragraphs from "/src/data/about.json";

const About = () => {
  return (
    <div className="text-matte flex flex-col gap-4 max-w-[450px] lg:max-w-none mx-auto px-4 lg:px-6">
      <div className=" flex flex-col-reverse lg:grid grid-cols-[75%_25%] p-2 gap-2 lg:gap-6">
        <div
          className="flex flex-col justify-center items-center 
        gap-2 flex-wrap 
        lg:shadow rounded-4xl bg-card p-5
        transition-all duration-300 ease-in-out
        transform-gpu hover:scale-[1.02] hover:translate-y-1 hover:shadow-lg
        group
        "
        >
          <h1 className="text-xl lg:text-6xl font-extrabold group-hover:text-highlight transition-colors duration-500">
            Ayan Imran
          </h1>
          <p className="font-extralight text-base lg:text-xl text-center lg:text-left ">
            I am data analyst and economics student specializing in data modeling, machine learning, and computational analysis. 
            My work spans building Python-based data pipelines for large-scale ingredient safety classification, developing API-driven systems 
            for public health data integration, and automating financial reporting workflows for enterprise use. 
            At Northeastern University, I’ve applied econometric modeling and data visualization to extract meaningful insights from complex, 
            real-world datasets — combining technical precision with an understanding of economic systems and human behavior.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-start w-full mt-2 gap-1">
            <div className="group-hover:text-highlight duration-500">
              <svg
                className="fill-current w-15 h-15"
                viewBox="0 0 14 14"
                role="img"
                focusable="false"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
              </svg>
            </div>
            <div className="flex flex-col text-center lg:text-left group-hover:text-highlight">
              <a
                href="https://www.northeastern.edu/"
                target="_blank"
                className="font-bold"
              >
                Northeastern University
              </a>
              <h3>Bachelor of Science in Economics and Data Science</h3>
              <p>Class of 2026</p>
            </div>
          </div>
        </div>
        <div
          className="h-full lg:bg-card rounded-4xl p-3 lg:flex flex-col gap-5
        justify-center items-center lg:shadow
        transition-all duration-300 ease-in-out
        transform-gpu hover:scale-[1.02] hover:translate-y-1 hover:shadow-lg
        group"
        >
          <div className="max-w-48 h-48 w-full lg:max-w-72 lg:h-72 overflow-hidden rounded-full lg:rounded-xl mx-auto transition lg:hover:translate-y-1 lg:hover:scale-[1.02]">
            <img
              src="/assets/about_image.png"
              alt="Me"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden lg:flex flex-1 w-full justify-evenly p-1 mt-3">
            <a
              href="mailto:ayanimran6903@gmail.com"
              target="_blank"
              className="transition-all hover:scale-[1.35] duration-300 hover:text-highlight hover:translate-y-1"
            >
              <svg
                className="stroke-current"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              href="https://github.com/AyanImran20"
              target="_blank"
              className="transition-all hover:scale-[1.35] duration-300 hover:text-highlight hover:translate-y-1"
            >
              <svg
                className="fill-current stroke-current"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" />
                <path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ayan-imran-23024b280/"
              target="_blank"
              className="transition-all hover:scale-[1.35] duration-300 hover:text-highlight hover:translate-y-1"
            >
              <svg
                className="fill-current line-current"
                width="30px"
                height="30px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>linkedin [#161]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" strokeWidth="1" fillRule="evenodd">
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-180.000000, -7479.000000)"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                        id="linkedin-[#161]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="w-full hidden lg:flex justify-center items-center">
            <a
              href="/Sarthak_Kakkar_resume.pdf"
              download="Sarthak_Kakkar_resume.pdf"
              className="
            bg-surface p-2 px-6 font-bold rounded shadow
            transition-all hover:scale-[1.2] duration-300 hover:shadow-bg
            hover:cursor-pointer border-neutral-900 hover:text-highlight hover:border-highlight border-2"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-8 lg:grid-cols-4 p-5 items-stretch">
        <div
          className="flex flex-col gap-3 bg-card items-center p-3 lg:px-10 rounded group shadow lg:pt-10
             transition-transform duration-300 ease-out
             hover:rotate-x-3 hover:rotate-y-3 hover:scale-105
             h-full
        "
        >
          <div
            className="p-1 bg-surface rounded shadow transition-all hover:bg-shadow hover:scale-[1.05] hover:translate-y-1
           gap-2 group-hover:text-highlight"
          >
            <svg
              className="fill-current"
              width="80px"
              height="80px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>ai</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="Q3_icons" data-name="Q3 icons">
                  <g>
                    <path d="M45.6,18.7,41,14.9V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2L24,5.9,18.5,2.2,17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4L2.4,18.7a.8.8,0,0,0-.4.8v9H2a.8.8,0,0,0,.4.8L7,33.1v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2L24,42.1l5.5,3.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l4.6-3.8a.8.8,0,0,0,.4-.7V19.4h0A.8.8,0,0,0,45.6,18.7Zm-5.1,6.8H42v1.6l-3.5,2.8-.4.3-.4-.2a1.4,1.4,0,0,0-2,.7,1.5,1.5,0,0,0,.6,2l.7.3h0v5.4l-6.6,3.1-4.2-2.8-.7-.5V25.5H27a1.5,1.5,0,0,0,0-3H25.5V9.7l.7-.5,4.2-2.8L37,9.5v5.4h0l-.7.3a1.5,1.5,0,0,0-.6,2,1.4,1.4,0,0,0,1.3.9l.7-.2.4-.2.4.3L42,20.9v1.6H40.5a1.5,1.5,0,0,0,0,3ZM21,25.5h1.5V38.3l-.7.5-4.2,2.8L11,38.5V33.1h0l.7-.3a1.5,1.5,0,0,0,.6-2,1.4,1.4,0,0,0-2-.7l-.4.2-.4-.3L6,27.1V25.5H7.5a1.5,1.5,0,0,0,0-3H6V20.9l3.5-2.8.4-.3.4.2.7.2a1.4,1.4,0,0,0,1.3-.9,1.5,1.5,0,0,0-.6-2L11,15h0V9.5l6.6-3.1,4.2,2.8.7.5V22.5H21a1.5,1.5,0,0,0,0,3Z" />
                    <path d="M13.9,9.9a1.8,1.8,0,0,0,0,2.2l2.6,2.5v2.8l-4,4v5.2l4,4v2.8l-2.6,2.5a1.8,1.8,0,0,0,0,2.2,1.5,1.5,0,0,0,1.1.4,1.5,1.5,0,0,0,1.1-.4l3.4-3.5V29.4l-4-4V22.6l4-4V13.4L16.1,9.9A1.8,1.8,0,0,0,13.9,9.9Z" />
                    <path d="M31.5,14.6l2.6-2.5a1.8,1.8,0,0,0,0-2.2,1.8,1.8,0,0,0-2.2,0l-3.4,3.5v5.2l4,4v2.8l-4,4v5.2l3.4,3.5a1.7,1.7,0,0,0,2.2,0,1.8,1.8,0,0,0,0-2.2l-2.6-2.5V30.6l4-4V21.4l-4-4Z" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h2 className="font-bold text-xl text-center">Data Analysis & Modeling</h2>
          <p className="text-center">
            Proficient in applying statistical modeling and machine learning to analyze complex datasets and uncover actionable insights. 
            Experienced with Python, Stata, and SQL for quantitative analysis, data cleaning, and predictive modeling 
            across health, finance, and consumer data.
          </p>
        </div>

        <div
          className="flex flex-col gap-3 bg-card items-center p-3 lg:px-10 rounded group shadow lg:pt-10
             transition-transform duration-300 ease-out
             hover:rotate-x-3 hover:rotate-y-3 hover:scale-105
             h-full
        "
        >
          <div
            className="p-1 bg-surface rounded shadow transition-all hover:bg-shadow hover:scale-[1.05] hover:translate-y-1
          group-hover:text-highlight gap-2"
          >
            <svg
              className="fill-current"
              width="80px"
              height="80px"
              viewBox="0 0 32 32"
              id="icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>datastore</title>
              <circle cx="23" cy="23" r="1" />
              <rect x="8" y="22" width="12" height="2" />
              <circle cx="23" cy="9" r="1" />
              <rect x="8" y="8" width="12" height="2" />
              <path d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z" />
              <rect width="32" height="32" fill="none" />
            </svg>
          </div>
          <h2 className="font-bold text-xl text-center">Data Visualization & Storytelling</h2>
          <p className="text-center">
           Skilled in transforming raw data into clear, compelling visuals using Matplotlib, Figma, and Excel dashboards. 
           Focused on creating intuitive, data-driven narratives that support business decisions and research communication.
          </p>
        </div>

        <div
          className="flex flex-col gap-3 bg-card items-center p-3 lg:px-10 rounded group shadow lg:pt-10
             transition-transform duration-300 ease-out
             hover:rotate-x-3 hover:rotate-y-3 hover:scale-105
             h-full
        "
        >
          <div
            className="p-1 bg-surface rounded shadow transition-all hover:bg-shadow hover:scale-[1.05] hover:translate-y-1
          group-hover:text-highlight gap-2"
          >
            <svg
              className="fill-current"
              width="80px"
              height="80px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 3V0H6V3H8Z" />
              <path d="M0.792893 2.20711L3.29289 4.70711L4.70711 3.29289L2.20711 0.792893L0.792893 2.20711Z" />
              <path d="M6 5L5 6.00001L8 15H10L10.7172 12.1314L14.2929 15.7071L15.7071 14.2929L12.1314 10.7172L15 10V8L6 5Z" />
              <path d="M0 6H3V8H0V6Z" />
            </svg>
          </div>
          <h2 className="font-bold text-xl text-center">Applied Machine Learning</h2>
          <p className="text-center">
            Capable of developing Python-based pipelines for classification, clustering, and regression tasks.
             Applied ML techniques to detect synthetic ingredients, evaluate product safety, 
             and quantify risk using data-driven feature extraction and scoring algorithms.
            tooling.
          </p>
        </div>

        <div
          className="flex flex-col gap-3 bg-card items-center p-3 lg:px-10 rounded group shadow lg:pt-10
             transition-transform duration-300 ease-out
             hover:rotate-x-3 hover:rotate-y-3 hover:scale-105
             h-full
        "
        >
          <div
            className="p-1 bg-surface rounded shadow transition-all hover:bg-shadow hover:scale-[1.05] hover:translate-y-1
          group-hover:text-highlight gap-2"
          >
            <svg
              className="fill-current"
              height="80px"
              width="80px"
              version="1.1"
              id="Icons"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 32 32"
              xmlSpace="preserve"
            >
              <path
                d="M29.9,17.5C29.7,17.2,29.4,17,29,17c-2.2,0-4.3,1-5.6,2.8L22.5,21c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9
              c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5
              c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8
              C30,18.2,30,17.8,29.9,17.5z"
              />
              <path
                d="M4.5,18c0.1,0,0.3,0,0.4,0c1.2-1.1,2.7-1.9,4.3-2.4C9.1,15.1,9,14.5,9,14c0-4.4,3.6-8,8-8s8,3.6,8,8c0,0.7-0.1,1.4-0.3,2.1
              C26,15.4,27.5,15,29,15c0.7,0,1.4,0.3,1.9,0.7C31,15.1,31,14.6,31,14c0-1.1-0.1-2.2-0.4-3.3c-0.1-0.5-0.6-0.8-1.1-0.8
              c-1.2,0.2-2.4-0.4-3-1.5c-0.6-1-0.5-2.4,0.2-3.3c0.3-0.4,0.3-1-0.1-1.3C25,2.3,23.1,1.2,21,0.6c-0.5-0.1-1,0.1-1.2,0.6
              C19.3,2.3,18.2,3,17,3s-2.3-0.7-2.8-1.8C14,0.7,13.5,0.4,13,0.6C10.9,1.2,9,2.3,7.4,3.9C7,4.2,7,4.8,7.3,5.2c0.7,1,0.8,2.3,0.2,3.3
              c-0.6,1-1.8,1.6-3,1.5c-0.5-0.1-1,0.3-1.1,0.8C3.1,11.8,3,12.9,3,14s0.1,2.2,0.4,3.3C3.5,17.8,4,18.1,4.5,18z"
              />
            </svg>
          </div>
          <h2 className="font-bold text-xl text-center text-[clamp(0.9rem,2vw,1.25rem)]">
            Economic & Financial Analytics
          </h2>
          <p className="text-center">
            Experienced in building and interpreting financial models, analyzing macroeconomic indicators, 
            and performing policy impact assessments. 
            Strong background in econometrics, public finance, and monetary systems, 
            with a focus on connecting quantitative outcomes to real-world behavior.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
