import myPhoto from '../resource/images/myPhoto.png';

function Page1() {
  const navbar = ['Home', 'About', 'Projects', 'Contact', 'Fire me an Email'];

  const handleScroll = () => {
    window.scroll(0, 720);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${myPhoto})`,
        backgroundPosition: ' 80% 100%',
        backgroundSize: '35vw',
        backgroundRepeat: 'no-repeat',
      }}
      className="h-[100vh] bg-slate-700 z-0 text-slate-200/70"
    >
      <header className="flex justify-between px-8 py-5 border border-slate-700">
        <h2 className=" font-bold text-xl text-slate-200/100">Rizvan K.</h2>
        <nav>
          <ul className="flex gap-14 cursor-pointer animate__animated animate__lightSpeedInRight ">
            {navbar.map((nav) => {
              if (nav === 'About') {
                return (
                  <li
                    className=" last-of-type:text-slate-200/90 hvr-underline-from-center pb-1 hover:text-white"
                    onClick={handleScroll}
                  >
                    {nav}
                  </li>
                );
              } else {
                return (
                  <li className=" last-of-type:text-slate-200/90 hvr-underline-from-center pb-1 hover:text-white ">
                    {nav}
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </header>
      <main className=" flex">
        <section className=" w-[40vw] mt-40 ml-24">
          <h1 className=" text-5xl mb-8 text-slate-200/100 font-serif tracking-wide animate__animated overflow-hidden border-r-orange-500 whitespace-nowrap">
            Full Stack Developer
          </h1>
          <h4 className=" mb-12 text-lg font-light tracking-wide">
            I'm a MERN full stack developer with a passion for web development.
            I'm dedicated to constantly learning and improving my skills.
          </h4>
          <button className=" border border-slate-500/60 w-36 p-4 text-xs font-bold hvr-bounce-to-right animate__animated animate__lightSpeedInLeft">
            HIRE ME
          </button>
        </section>
      </main>
    </div>
  );
}

export default Page1;
