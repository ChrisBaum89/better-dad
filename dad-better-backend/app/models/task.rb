class Task < ApplicationRecord
    has_many :completedtasks
    has_many :favorites
    has_many :users, through: :favorites
    has_many :users, through: :completedtasks
end
