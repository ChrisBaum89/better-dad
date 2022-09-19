class AssignedTaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :task_id, :created_at
  belongs_to :user, through: :assigned_tasks
  belongs_to :task, through: :assigned_tasks
end
