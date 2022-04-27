import "./TextCard.css";

const TextCard = ({ style, children }) => {
  return (
    <div className="text-card" style={style ? style : {}}>
      {children}
    </div>
  );
};

export default TextCard;
