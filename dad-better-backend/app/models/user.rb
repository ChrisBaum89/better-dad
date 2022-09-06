class User < ApplicationRecord
    has_many :children
    has_many :achievements
    has_many :badges, through: :achievements

end
