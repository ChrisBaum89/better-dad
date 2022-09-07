class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :name, :email, :score
  has_many :children
  has_many :badges, through: :earned_badges
  has_many :tasks, through: :assigned_tasks
  has_many :tasks, through: :completed_tasks
end
