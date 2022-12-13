
const Button = ({
    children,
    link
}) => {
  return (
    <a className="btn btn-outline-light mt-auto" href={link}>
      {children}
    </a>
  );
};
  
export default Button;