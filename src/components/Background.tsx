import "../styles/Background.css";

const Background = () => {
  return (
    <ul className="background">
      {Array.from({ length: 30 }).map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default Background;