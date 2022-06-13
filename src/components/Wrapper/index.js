function Wrapper({ children }) {
  return (
    <div className="w-full h-full py-3 px-6 md:py-6 md:px-12">
      {children}
      <p className="rights dark:text-gray-200">
        Contributors :
        <a href="https://github.com/0sssama" target="_blank" rel="noreferrer">
          Oussama Labrahmi
        </a>
        ,{" "}
        <a href="https://github.com/awbx" target="_blank" rel="noreferrer">
          Abdelhadi Sabani
        </a>
        ,{" "}
        <a
          href="https://github.com/attia-nabil"
          target="_blank"
          rel="noreferrer"
        >
          Nabil Attia
<<<<<<< HEAD
        </a>
        ,{" "}
=======
        </a>,{" "}
>>>>>>> 0f3d59abd9b758b68126c05dea0f3cc45725d129
        <a href="https://github.com/rida-el" target="_blank" rel="noreferrer">
          Rida El-Mazary
        </a>
        ,{" "}
        <a href="https://github.com/abellaismail7" target="_blank" rel="noreferrer">
          Ismail Ait Bella
        </a>{" "}
        and{" "}
        <a href="https://github.com/chaibourajli" target="_blank" rel="noreferrer">
          Chaimaa Bourajli
        </a>{" "}
        .
      </p>
    </div>
  );
}

export default Wrapper;
