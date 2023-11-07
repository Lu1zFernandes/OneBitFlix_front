import { EpisodeType } from "@/services/courseService";
import styles from "./styles.module.scss";

interface props {
  episode: EpisodeType;
}

const EpisodeList = function ({ episode }: props) {
  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;

    return result;
  };

  return (
    <>
      <div className={styles.episodeCard}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSecondsToMin(episode.secondsLong)}
          </p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>
            {episode.synopsis} AAAA Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Voluptatum, facilis inventore adipisci velit
            numquam, fugit dolores expedita quis veniam in vitae sapiente
            tempore suscipit explicabo animi molestias quidem perspiciatis
            quibusdam voluptas repellat maiores amet tempora! Sint beatae
            excepturi sed officiis, voluptatem harum a voluptate dolorum minus
            officia corrupti temporibus enim!
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
            maiores.
          </p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
