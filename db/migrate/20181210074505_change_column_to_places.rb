class ChangeColumnToPlaces < ActiveRecord::Migration[5.2]
  def change
    change_column :places, :point, :point
  end
end
