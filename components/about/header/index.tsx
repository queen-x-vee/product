const Header = () => {
  return (
    <header className="lg:pt-12 pt-6">
      <h1 className="xl:text-5xl md:text-4xl text-3xl font-medium text-white">
        Who We Are
      </h1>
      <div className="text-texts lg:text-xl text-base text-justify max-w-xl md:max-w-3xl font-light">
        <p className="pt-2">
          Innovotio is a tech organization that specializes in connecting tech
          talent across all levels of experience to organizations of all sizes
          to achieve their business goals.
        </p>
        <p className="py-5">
          We offer up-to-date training programs for tech beginners or young tech
          talents looking to upskill and provide additional services to
          organizations in forms of business consultancy, tech events management
          & branded merchandise.
        </p>
      </div>
      <div className="lg:pt-20 pt-14 flex justify-center items-center">
        <img
          src="../../../clients.svg"
          alt="brands"
          className="w-full h-10 sm:block hidden"
        />
        <img
          src="../../../clients-mobile.svg"
          alt="brands"
          className="w-96 h-36 sm:hidden block"
        />
      </div>
      <hr className="lg:mt-20 mt-14 opacity-10" />
    </header>
  );
};

export default Header;
