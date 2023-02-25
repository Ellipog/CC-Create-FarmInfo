import styles from "../css/FarmInfoBox.module.css";
import wheatImage from "../images/wheat.png";
import oakLogImage from "../images/oak_sapling.png";

function FarmInfoBox(props) {
  const itemImages = {
    wheatpng: wheatImage,
    oak_logpng: oakLogImage,
  };

  const data = props.data;
  const image = itemImages[data.image];
  console.log(data)

  const updateDate = new Date(data.time)
  let updateHours = updateDate.getHours();
  updateHours = ("0" + updateHours).slice(-2);
  let updateMin = updateDate.getMinutes();
  updateMin = ("0" + updateMin).slice(-2);

  const mins = new Date(Date.now() - data.time).getMinutes()

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={data.item} />
      </div>
      <p className={`${styles.status} ${data.running ? styles.active : styles.inactive}`} />
      <div className={styles.content}>
        <p className={styles.header}>{data.item}</p>
        <p className={styles.data}>Updated: <span>{updateHours}:{updateMin} - {mins}m ago</span></p>
        <p className={styles.data}>Total output: <span>{data.total}</span></p>
        <p className={styles.data}>In storage: <span>{data.inStorage}</span></p>
      </div >
    </div >
  );
}

export default FarmInfoBox;
