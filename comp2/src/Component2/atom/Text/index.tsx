interface TtProps {
  children: React.ReactNode;
  className?: string;
}

const Text: React.FC<TtProps> = ({ children, className = "" }) => {
  return <p className={`${className}`}>{children}</p>;
};
export default Text;
