class RemovePlaceUrlToProposals < ActiveRecord::Migration[5.2]
  def change
    remove_column :proposals, :place_url
  end
end
