class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.belongs_to :poll
      t.integer :option_1, default: 0
      t.integer :option_2, default: 0
      t.integer :option_3, default: 0
      t.integer :option_4, default: 0

      t.timestamps
    end
  end
end
