const Highlight = ({ children }) => {
  return (
    <span className="rounded-xl bg-accent box-decoration-clone px-2">
      {children}
    </span>
  );
};

export default Highlight;
