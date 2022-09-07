class EarnedBadgeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :badge_id
end
