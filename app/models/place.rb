class Place < ApplicationRecord
    has_one :proposal
    accepts_nested_attributes_for :proposal, allow_destroy: true
end
