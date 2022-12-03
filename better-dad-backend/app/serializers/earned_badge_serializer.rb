class EarnedBadgeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user, :badge, :created_at
  belongs_to :user
  belongs_to :badge
end
