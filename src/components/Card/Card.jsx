const Car = (props) => {
  const { title, content, btn } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-header">{title}</h2>
        <p className="text-content2">{content}</p>
        <div className="card-footer">
          <button className="btn-secondary btn">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default Car;
