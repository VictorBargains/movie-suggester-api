reviewService = {
    checkUserId(db, user_id) {
        return db
            .from('movie_suggester_users')
            .select('id')
            .where('id', user_id)
            .first()
    },

    getMovieId(db, title) {
        return db
            .from('movie_suggester_movies')
            .select('id')
            .where('title', title)
            .first()
    },

    insertNewMovie(db, newMovieData) {
        return db
            .into('movie_suggester_movies')
            .insert(newMovieData)
            .returning('id')
            .then(([id]) => id)
    },

    insertReview(db, newReview) {
        return db
            .into('movie_suggester_movie_ratings')
            .insert(newReview)
            .returning('id')
            .then(([id]) => id)
    }
}

module.exports = reviewService