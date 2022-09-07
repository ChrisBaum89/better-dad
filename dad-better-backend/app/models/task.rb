class Task < ApplicationRecord
    has_many :completedtasks
    has_many :users, through: assigned_tasks
end
