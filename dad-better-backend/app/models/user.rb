class User < ApplicationRecord
    has_many :children
    has_many :achievements
    has_many :completedtasks
    has_many :tasks, through: :completedtasks
    has_many :badges, through: :achievements

end
