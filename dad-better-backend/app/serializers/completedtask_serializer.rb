class CompletedtaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :task_id, :completed, :date
end
