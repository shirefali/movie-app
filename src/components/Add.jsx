import "./Add.css";

const Add = () => {
  return (
    <section className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input type="text" placeholder="Search for a movie" />
          </div>
          <ul className="results"></ul>
        </div>
      </div>
    </section>
  );
};

export default Add;
