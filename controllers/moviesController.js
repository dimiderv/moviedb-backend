const mySchemas = require('../models/schemas');

const getMovies = async (req, res) => {
    console.log("TRYING TO FETCH Movies");
    try {
      const movieData = await mySchemas.movies.find().populate('genre');
      res.status(200).json({
        movies: movieData.map((movie) => ({
          id: movie.id,
          title: movie.title,
          thumbnail:movie.thumbnail,
          genre: movie.genre, 
          extract: movie.extract, 
          year: movie.year, 
          cast: movie.cast
          
  
        })),
      });
      console.log(FgGreen,"FETCHED Movies",FgReset);
      //console.log(movieData)
    } catch (err) {
      console.error(FgRed,"ERROR FETCHING Movies");
      console.error(err.message);
      res.status(500).json({ message: "Failed to load list of movies." });
    }
  }

  module.exports ={ getMovies};