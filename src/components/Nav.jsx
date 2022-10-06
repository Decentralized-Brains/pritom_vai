const Nav = () => {
  return (
    <nav className="container py-4 absolute px-6">
      <ul className="max-w-fit md:mx-auto pb-2 flex gap-6 text-lg font-semibold">
        <li>
          <a className="text-gray-200 hover:text-sky-400 duration-300" href="#">
            About
          </a>
        </li>
        <li>
          <a
            className="text-gray-200 hover:text-sky-400 duration-300"
            href="#projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="text-gray-200 hover:text-sky-400 duration-300"
            href="#research"
          >
            Research
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
