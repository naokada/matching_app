class AddColumnProposalIdToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :proposal_id, :integer, foreign_ley:true
  end
end
