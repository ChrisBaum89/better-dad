class AssignedTaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user, :task, :created_at
  belongs_to :user
  belongs_to :task
end
