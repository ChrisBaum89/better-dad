class CompletedTaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :task_id, :created_at
  belongs_to :user, through: :completed_tasks
  belongs_to :task, through: :completed_tasks
end
