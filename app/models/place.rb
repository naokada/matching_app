class Place < ApplicationRecord
    belongs_to :proposal, optional: true
    accepts_nested_attributes_for :proposal, allow_destroy: true
    validates :point, coordinate: true
end
