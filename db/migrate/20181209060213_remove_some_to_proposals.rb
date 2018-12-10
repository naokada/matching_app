class RemoveSomeToProposals < ActiveRecord::Migration[5.2]
  def change
    remove_column :proposals, :title, :place_url
  end
end
