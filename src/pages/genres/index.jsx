import useQueryGenres from "../../hooks/useQueryGenres"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Genres() {

  const { movieList,tvList} = useQueryGenres

  return (
    <div>
      <h2>Genres</h2>
      <div>
      <h3>movieList</h3>

        {
          movieList.map((genres) => (
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={`https://image.tmdb.org/t/p/w500${genres.backdrop_path}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {genres.name}
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
      <h3>TV List</h3>
      {
        tvList.map((genres) => (
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100"
                image={`https://image.tmdb.org/t/p/w500${genres.backdrop_path}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {genres.name}
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
      
      
      </div>
     

    </div>
  )
}

export default Genres