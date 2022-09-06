class Task < ApplicationRecord
    has_many :completedtasks
    has_many :users, through: :completedtasks
end
