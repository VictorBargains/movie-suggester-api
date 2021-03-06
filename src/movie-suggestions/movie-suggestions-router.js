const express = require('express')
const movieService = require('./movie-suggestions-service')
const checkUserIdExists = require('../async-services/async-service')

const movieSuggesterRouter = express.Router()
const jsonBodyParser = express.json()

movieSuggesterRouter
    .route('/:user_id')
    .all(checkUserIdExists)
    .get((req, res) => {
        movieService.getMovies(
            req.app.get('db'),
            req.params.user_id
        )
        .then(movieSuggestions => {
            res.status(200).json(movieSuggestions)
        })
    })

module.exports = movieSuggesterRouter
