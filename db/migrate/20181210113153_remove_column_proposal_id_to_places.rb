class RemoveColumnProposalIdToPlaces < ActiveRecord::Migration[5.2]
  def change
    remove_column :proposals, :place_id, :integer
  end
end
