class CompletedTaskSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user, :task, :favorite, :created_at
  belongs_to :user
  belongs_to :task
end
