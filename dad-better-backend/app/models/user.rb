class User < ApplicationRecord
  has_secure_password

  has_many :children
  has_many :assigned_tasks
  has_many :completed_tasks
  has_many :earned_badges
  has_many :tasks, through: :assigned_tasks
  has_many :tasks, through: :completed_tasks
  has_many :badges, through: :earned_badges

  validates :username, uniqueness: { case_sensitive: false }

  def calc_score
    score = 0
    completed_tasks.each do |completed_task|
      score += completed_task.task.value
    end
    self.score = score
  end

  def number_assigned_tasks
    assigned_tasks.length
  end

  def tasks_assigned_today?
    current_date = DateTime.now.to_date
    assigned_today = self.assigned_tasks.any? {|task| task.created_at.to_date == current_date}
    completed_today = self.completed_tasks.any? {|task| task.created_at.to_date == current_date}
    assigned_today || completed_today
  end

  def assign_todays_tasks
    unless self.tasks_assigned_today?
      10.times do
        random_task_id = rand(1..Task.all.length)
        AssignedTask.create(user_id: self.id, task_id: random_task_id)
      end
    end
  end
end
