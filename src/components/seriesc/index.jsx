 import useQueryTvSeries from '../../hooks/useQueryTvSeries';
 import styles from "./index.module.css"

function Seriesc() {
  const { popular, airingToday, topRated } = useQueryTvSeries()


  return (
  <div className={styles.body}>
  <h2 className={styles.headingg}>Tv Series</h2>

  <h3 className={styles.title}>Popular</h3>
  <div className={styles.contain}>
  {
    popular.map((series) => (
   
    <div class={styles.card}>
    <img className={styles.image} src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`} />
    <div className={styles.container}>
    <h4>{series.name}</h4>
    <p><a className={styles.link}>play</a></p>
    </div>
    </div>
  ))
    }

  </div>
  
    <h3 className={styles.title}>Airing Today</h3>
    <div className={styles.contain}>
    {
      airingToday.map((series) => (
     
      <div class={styles.card}>
      <img className={styles.image} src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`} />
      <div className={styles.container}>
      <h4>{series.name}</h4>
      <p><a className={styles.link}>play</a></p>
      </div>
      </div>
    ))
      }

    </div>
    
      <h3 className={styles.title}>Top Rated</h3>
      <div className={styles.contain}>
      {
        topRated.map((series) => (
       
        <div class={styles.card}>
        <img className={styles.image} src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`} />
        <div className={styles.container}>
        <h4>{series.name}</h4>
        <p><a className={styles.link}>play</a></p>
        </div>
        </div>
      ))
        }
    

      </div>
     
  </div>
   

   )
 }

 export default Seriesc;
