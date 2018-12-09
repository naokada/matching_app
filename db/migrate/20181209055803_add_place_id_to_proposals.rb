class AddPlaceIdToProposals < ActiveRecord::Migration[5.2]
  def change
    add_column :proposals, :place_id, :integer, null:false, foreign_ley:true
  end
end
