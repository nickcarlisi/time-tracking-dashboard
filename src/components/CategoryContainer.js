import styles from "./CategoryContainer.module.scss";
// import data from "../data.json";

const CategoryContainer = (props) => {
  const title = props.title;
  const current = props.current;
  const previous = props.previous;

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h2>{current}hrs</h2>
      <h3>Last Week - {previous}hrs</h3>
    </div>
  );
};

// data.map((category) => console.log(category.timeframes));

export default CategoryContainer;
