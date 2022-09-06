class QuotesController < ApplicationController

    def index
        quotes = Quote.all
        render json: QuoteSerializer.new(quotes)
    end
end
