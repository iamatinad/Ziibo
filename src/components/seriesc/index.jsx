import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useQueryTvSeries from '../../hooks/useQueryTvSeries';

function Seriesc() {
  const { onTheAir, airingToday } = useQueryTvSeries()


  return (
    <div>
      <h2>TvSeries</h2>
      <div >

        {
          onTheAir.map((series) => (
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {series.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  play
                </Button>
              </CardActions>
            </Card>

          ))
        }
      </div>



    </div>
  )
}

export default Seriesc