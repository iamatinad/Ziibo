import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useQueryTvSeries from '../../hooks/useQueryTvSeries';

function Seriesc() {
  const { onTheAir,airingToday,topRated} = useQueryTvSeries()


  return (
    <div>
      <h2>TvSeries</h2>
      <div>
      <h3>On the Air</h3>

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
      <div>
      <h3>Airing Today</h3>
      {
        airingToday.map((series) => (
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
      <div>
      <h3>Top Rated</h3>
      {
        topRated.map((series) => (
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