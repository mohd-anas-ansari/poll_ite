class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.integer :option_1
      t.integer :option_2
      t.integer :option_3
      t.integer :option_4

      t.timestamps
    end
  end
end
