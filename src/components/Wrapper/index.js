function Wrapper({ children }) {
  return (
    <div className="w-full h-full py-3 px-6 md:py-6 md:px-12">
      {children}
      <p className="rights">
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
        </a>{" "}
        and{" "}
        <a href="https://github.com/rida-el" target="_blank" rel="noreferrer">
          Rida El-Mazary
        </a>
        .
      </p>
    </div>
  );
}

export default Wrapper;
