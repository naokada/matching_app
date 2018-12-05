class CreateProposals < ActiveRecord::Migration[5.2]
  def change
    create_table :proposals do |t|
      t.string :title
      t.text :place_url
      t.text :detail
      t.datetime :end_time

      t.timestamps
    end
  end
end
