class FavoritesController < ApplicationController

    def index
        favorites = Favorite.all
        render json: FavoriteSerializer.new(favorites)
    end
end
