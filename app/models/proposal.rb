class Proposal < ApplicationRecord
    has_one :place
    accepts_nested_attributes_for :place, allow_destroy: true
end
