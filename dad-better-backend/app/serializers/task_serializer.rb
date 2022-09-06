class TaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :description, :value, :category
  has_many :users, through: :completedtasks
end
