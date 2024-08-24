import { Photo } from "@/actions/photos-get";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/feed/feed.module.css";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  return (
    <>
      <ul className={`${styles.feed} animeLeft`}>
        { photos.map((photo, index) => {
          return (
            <li className={styles.photo} key={index}>
              <Link href={`/foto/${photo.id}`} scroll={false}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  width={1500}
                  height={1500}
                  sizes="80vw"
                />
                <span className={styles.visualizacao}>{photo.acessos}</span>
              </Link>
            </li>
          )
        }) }
      </ul>
    </>
  );
}
