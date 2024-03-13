import useQueryTvSeries from '../../hooks/useQueryTvSeries';
import styles from './index.module.css'

function Seriesc() {
  const { onTheAir, airingToday, topRated } = useQueryTvSeries()


  return (
    <>
      <h2>TvSeries</h2>
<div>
<h3>On The Air</h3>
      <div className={styles.container}>
        {
          onTheAir.map((series) => (
            <div className={styles.card}>
              <div>
                <div className={styles.content}>
                  <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`} />
                </div>
                <div className={styles.body}>
                  {series.name}
                </div>
                <div>
                  <button>PLAY</button>
                </div>
              </div>
            </div>

          ))
        }
      </div>
     
  
</div>
      <h3>Airing Today</h3>
      
      <div className={styles.container}>
        {
          airingToday.map((series) => (
            <div className={styles.card}>
              <div className={styles.content}>
                <div>
                  <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`} />
                </div>
                <div className={styles.body}>
                  {series.name}
                </div>
                <div>
                  <button>PLAY</button>
                </div>
              </div>
            </div>

          ))
        }

      </div>

      <h3>Top Rated</h3>
      <div className={styles.container}>
        {
          topRated.map((series) => (
            <div className={styles.card}>
              <div className={styles.content}>
                <div>
                  <img className={styles.img} src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`} />
                </div>
                <div className={styles.body}>
                  {series.name}
                </div>
                <div>
                  <button>PLAY</button>
                </div>
              </div>
            </div>

          ))
        }
      </div>









    </>
  )
}

export default Seriesc;