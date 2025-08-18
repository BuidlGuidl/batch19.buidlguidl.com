import Image from "next/image";
import type { NextPage } from "next";

const Mikey: NextPage = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-accent rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-100">
          <Image src="/fish.jpg" alt="avatar" fill sizes="(max-width: 768px) 100vw, 128px" className="object-cover" />
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Mikey</h1>
          <p className="text-xl text-indigo-600 dark:text-gray-100 mt-1">Backend Developer</p>

          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
            <a href="https://github.com/Kinway050" target="_blank" rel="noopener" className="social-icon">
              <GitHubIcon />
            </a>
            <a href="mailto:your@email.com" className="social-icon">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 pb-2 border-b">About me</h2>
        <p className="text-gray-600 dark:text-slate-100 leading-relaxed">
          I am a backend development engineer from China with 3 years of Golang development experience. I am now working
          on entering the web3 industry and making a Transition to solidity development. I hope to improve my cognition
          and development capabilities during this journey.
        </p>
        <p className="text-gray-600 dark:text-slate-100 leading-relaxed">
          我是一名来自中国的后端开发工程师,有3年的Golang开发经验,现在努力于进入web3行业并转型为solidity开发,希望在此次旅程中提高自己的认知和开发能力。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 pb-2 border-b">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["Golang", "Cpp", "K8S", "Solidity"].map(skill => (
            <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 pb-2 border-b">Hobbies</h2>
        <div className="flex flex-wrap gap-2">
          {["Texas Hold'em", "Fitness", "Games"].map(skill => (
            <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
  </svg>
);

export default Mikey;
