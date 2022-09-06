class BadgesController < ApplicationController
    def index
        badges = Badge.all
        render json: BadgeSerializer.new(badges)
    end
end
